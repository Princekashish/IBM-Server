import { CreateFundrise } from "../Models/Fundraiser.model.js";
import jwt from "jsonwebtoken";

export const createFundraiser = async (req, res) => {
  const { name, category, details, location } = req.body;
  let userId = req.user;

  // Validate request body
  if (!name || !category || !details || !location) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    userId = verified.id; // Get the user ID from the token
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token: " + error.message });
  }

  try {
    const fundraiser = new CreateFundrise({
      name,
      category,
      details,
      location,
      userId,
    });
    const result = await fundraiser.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something ka kr backhoda", error: error.message });
  }
};

export const getFundraisers = async (req, res) => {
  try {
    const fundraisers = await CreateFundrise.find();

    res.status(200).json(fundraisers);
  } catch (error) {
    handleError(res, error, "Error fetching fundraisers");
  }
};

export const getFundraisersByUser = async (req, res) => {
  const userId = req.user; // Get userId from request parameters

  try {
    const fundraisers = await CreateFundrise.find({ userId }); // Find fundraisers by userId
    res.status(200).json(fundraisers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updateFundraiser = async (req, res) => {
  const { id } = req.params;
  const { name, category, details, location } = req.body;
  const newUpdate = {
    name,
    category,
    details,
    location,
    createdBy: req.userId,
  };

  try {
    await CreateFundrise.findByIdAndUpdate(id, newUpdate, { new: true });
    res.status(200).json(newUpdate);
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Error updating fundraiser", error: error.message });
  }
};

export const deleteFundraiser = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the fundraiser exists
    const fundraiser = await CreateFundrise.findByIdAndDelete(id);
    res.status(202).json(fundraiser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting fundraiser", error: error.message });
  }
};

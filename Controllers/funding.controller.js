import { CreateFundrise } from "../Models/Fundraiser.model.js";

export const createFundraiser = async (req, res) => {
  const { name, category, details, location } = req.body;
  try {
    const fundraiser = new CreateFundrise({
      name,
      category,
      details,
      location,
      createdBy: req.user._id,
    });
    const result = await fundraiser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
    console.error(error);
  }
};

export const getFundraisers = async (req, res) => {
  try {
    const fundraisers = await CreateFundrise.find(); // Using the correct model name
    res.status(200).json(fundraisers);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getFundraisersByUser = async (req, res) => {
  try {
    const userId = req.user._id; // Get the logged-in user ID
    const fundraisers = await CreateFundrise.find({ createdBy: userId }); // Query fundraisers created by this user
    res.status(200).json(fundraisers);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

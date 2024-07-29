import { Fundrise } from "../Models/Fundraiser.model.js";

export const createFundraiser = async (req, res) => {
  const { name, category, details, location } = req.body;
  try {
    const fundraiser = new Fundrise({
      name,
      category,
      details,
      location,
    });
    const result = await fundraiser.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getFundraisers = async (req, res) => {
  try {
    const fundraisers = await Fundrise.find(); // Using the correct model name
    res.status(200).json(fundraisers);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

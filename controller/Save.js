const ContactModel = require('../model/ContactModel');


const save = async (req, res) => {
  try {
    const { name, email, message} = req.body;

    // Validate the data (add more validation as needed)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Create a new ContactModel instance
    const newContact = new ContactModel({
      name: name,
      email: email,
      message: message,
    });

    // Save the data to the MongoDB database
    const savedContact = await newContact.save();
    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: savedContact,
    });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {save};
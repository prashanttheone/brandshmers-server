const ContactModel = require('../model/ContactModel');


const get = async (req,res) =>{
   try{
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
   }
   catch (error) {
    // error handling
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports ={get};
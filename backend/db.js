const mongoose = require('mongoose');
const colors = require('colors')
require('dotenv').config()

const dbConnect = async() => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
    // const connection = await mongoose.connect(`mongodb+srv://vaibhav25goyal:<M1oWvTpaZyKTpw63>@ecommerce.hojol.mongodb.net/EcommerceProject2?retryWrites=true&w=majority&appName=Ecommerce`);
    console.log(colors.blue('Connection Successfull'))
  } catch (error) {
    console.log(colors.red(error))
  }
};

module.exports = dbConnect ;

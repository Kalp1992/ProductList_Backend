const express = require("express");
const bodyParser =require("body-parser");
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const cors=require("cors");
dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());


  app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
  });
  
  // API routes
  app.use('/api/products', require('./Routes/product_routes')); // Example for user-related routes
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
      //  useNewUrlParser: true,
       // useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit process with failure
    }
  };
  
  connectDB();
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
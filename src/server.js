// POST METHOD AGAIN - BACKEND

// const express = require("express")
// const app = express()
// const cors = require("cors")

// app.listen(5000,function(req,res)
// {
//     console.log("Server started...")
// }
// )

// var username = "john"
// var password = 123

// //MIDDLE WARE
// app.use(express.urlencoded({extended:true}))                                                  
// app.use(express.json())
// app.use(cors())
// //CORS - CROSS ORIGIN RESOURCE - BY DEFAULT DATA CAN'T BE PASSED FROM ONE SERVER TO ANOTHER FOR SECURITY REASONS, TO OVERCOME THIS WE NEED TO INSTALL A PACKAGE: 
// //npm install cors

// app.post("/login",function(req,res)
// {
// //  res.send("Submited successfully")
// // console.log(req.body)
// console.log(req.body.username)
// // console.log(req)
// // console.log(req.body.username)
// // console.log(req.body.password)
// //   if(req.body.username === username && Number(req.body.password) === password)           //postTING THE req.body.username FROM URL OF post METHOD (req.body.password)
// if(req.body.username === username && Number(req.body.password) === password)
//   {
//     res.send(true)
//   }
//   else
//   {
//     res.send(false)
//   }

// }
// )


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Mock credentials
const USER = {
  email: "admin@netflix.com",
  password: "123456"
};

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.json({
      success: true,
      message: "Login successful"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
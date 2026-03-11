const express = require("express");
const cors = required("cors");
const path = require("path");
const app = express();

app.use(cors());
app.options("*",cors());
app.use(express.json());
app.use(express.static("public"));


// Booking API
app.post("/book", (req, res) => {


    const booking = {
        name: req.body.name,
        phone: req.body.phone,
        service: req.body.service,
        date: req.body.date
    };

    bookings.push(booking);

    console.log("New Booking:", booking);

    res.send("Booking saved");
});

app.delete("/admin/bookings/:index",(req, res)=> {
  
  const  index = req.params.index;
  bookings.splice(index,1);
  res.json({message:"Booking deleted"});
});

app.post("/admin-login", (req, res) => {

const { username, password} =req.body;
  console.log = ( "Username received:", username);
  console.log = ("Password received:",password);

  if (username === "admin" && password === "Admin@789") {
    
  res.json({ success: true });
  } else {
    
    res.json({ success: false });
  }

});


// Admin API to get all bookings
app.get("/admin/bookings", (req, res) => {

    res.json(bookings);

});
// API route
app.get("/api", (req, res) => {
    res.send("API is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


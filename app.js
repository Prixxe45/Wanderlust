const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path'); 
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
  res.send("Hello World");
});
//Index Route
app.get("/listings", async (req, res) => {
const allListings = await Listing.find({});
res.render("listings/index.ejs", {allListings});
});

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Create Route
app.post("/listings", wrapAsync (async (req, res, next) => {
 
 const newListing = new Listing(req.body.listing);
 await newListing.save();
  res.redirect("/listings");
  

}));
//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
   let { id } = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/edit.ejs",{ listing });
});

//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect("/listings");
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});
// app.get("/testListing", async(req, res) => {
// let sampleListing = new Listing({
//   title: "Sample Villa",
//   description: "A beautiful villa with a sea view.",
//   price: 2500,
//   location: "Calangute, Goa",
//   country: "India",
//   image: "https://images.unsplash.com/photo-1685648628650-63740d39bffc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// })

// await sampleListing.save();
//   console.log("Listing created successfully");  
// res.send("Listing created successfully");
// });
app.all("*", (req, res, next) => {
  next(new ExpressError( 404 ,"Page Not Found"));
});

app.use((err, req, res, next) => {
  let {statusCode = 500, message = "Somthing went Wrong!"} = err;
res.status(statusCode).send(message);
});

app.listen(8080,() => {
  console.log("server is listening to port")
})

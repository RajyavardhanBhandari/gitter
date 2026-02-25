
const express = require("express");
const router = express.Router();
const companies = require("../data/companies.json");

router.get("/companies", (req,res)=>{
  res.json(companies);
});

router.get("/filter", (req,res)=>{
  const { minPE, maxPE, sector } = req.query;
  let result = companies;

  if(sector) result = result.filter(c => c.sector === sector);
  if(minPE) result = result.filter(c => c.pe >= parseFloat(minPE));
  if(maxPE) result = result.filter(c => c.pe <= parseFloat(maxPE));

  res.json(result);
});

module.exports = router;

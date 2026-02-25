
const express = require("express");
const router = express.Router();

router.get("/fii-dii", (req,res)=>{
  res.json({
    fiiNet: "₹+1,245 Cr",
    diiNet: "₹-342 Cr",
    trend: "FII Buying"
  });
});

router.get("/sector-performance", (req,res)=>{
  res.json([
    { sector:"IT", change:"+1.2%" },
    { sector:"Banking", change:"-0.3%" },
    { sector:"Energy", change:"+0.8%" }
  ]);
});

module.exports = router;

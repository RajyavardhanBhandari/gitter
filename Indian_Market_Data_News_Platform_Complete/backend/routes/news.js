
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/headlines", async (req,res)=>{
  try {
    const { data } = await axios.get("https://www.moneycontrol.com/news/business/markets/");
    const $ = cheerio.load(data);
    const headlines = [];
    $("h2").each((i,el)=>{
      if(i < 10) headlines.push($(el).text().trim());
    });
    res.json(headlines);
  } catch {
    res.json(["Unable to fetch live headlines"]);
  }
});

module.exports = router;

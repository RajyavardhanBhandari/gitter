
/*
Author: Rajyavardhan Bhandari
Project: Indian Market Data & News Platform
Created: 2026-02-25
*/

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const marketRoutes = require("./routes/market");
const analyticsRoutes = require("./routes/analytics");
const newsRoutes = require("./routes/news");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/market", marketRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Server running on " + PORT));

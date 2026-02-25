
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){
  const [companies,setCompanies] = useState([]);
  const [sectors,setSectors] = useState([]);
  const [fii,setFii] = useState({});
  const [news,setNews] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/market/companies")
      .then(res=>setCompanies(res.data));
    axios.get("http://localhost:5000/api/analytics/sector-performance")
      .then(res=>setSectors(res.data));
    axios.get("http://localhost:5000/api/analytics/fii-dii")
      .then(res=>setFii(res.data));
    axios.get("http://localhost:5000/api/news/headlines")
      .then(res=>setNews(res.data));
  },[]);

  return (
    <div style={{background:"#0f172a",color:"white",padding:"30px"}}>
      <h1>Indian Stock Market Data & News</h1>

      <h2>FII / DII Data</h2>
      <p>{fii.fiiNet} | {fii.diiNet} | {fii.trend}</p>

      <h2>Sector Performance</h2>
      {sectors.map((s,i)=>(
        <div key={i}>{s.sector}: {s.change}</div>
      ))}

      <h2>Company Fundamentals</h2>
      {companies.map((c,i)=>(
        <div key={i}>
          {c.name} ({c.symbol}) - PE: {c.pe} | ROE: {c.roe}% | EPS: {c.eps}
        </div>
      ))}

      <h2>Latest Market Headlines</h2>
      {news.map((n,i)=>(
        <div key={i}>{n}</div>
      ))}
    </div>
  );
}

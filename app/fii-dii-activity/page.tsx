import React from "react";

async function getDailyFIIDIIData() {
  // Daily FII/DII Data api
  const url = "https://www.nseindia.com/api/fiidiiTradeReact";
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

interface item {
  category: string;
  date: string;
  buyValue: string;
  sellValue: string;
  netValue: string;
}

async function FIIDIIActivity() {
  const fiiDiiJson: item[] = await getDailyFIIDIIData();

  return <div>{JSON.stringify(fiiDiiJson)}</div>;
}

export default FIIDIIActivity;

import React from "react";

interface item {
  category: string;
  date: string;
  buyValue: string;
  sellValue: string;
  netValue: string;
}

async function FIIDIIActivity() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NSE_API_URL}/api/fiidiiTradeReact`);
  const fiiDiiJson: item[] = await res.json();

  return <div>{JSON.stringify(fiiDiiJson)}</div>;
}

export default FIIDIIActivity;

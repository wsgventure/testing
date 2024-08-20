"use client";

import React, { useEffect, useState } from "react";

interface item {
  category: string;
  date: string;
  buyValue: string;
  sellValue: string;
  netValue: string;
}

export default function FIIDIIActivity() {
  const [values, setValues] = useState<item[]>([]);
  const [error, setError] = useState<null | string | unknown>(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NSE_API_URL}/api/fiidiiTradeReact`,
          { mode: 'no-cors'}
        );
        const data = await res.json();
        return { success: true, data };
      } catch (error) {
        return { success: false, error };
      }
    }

    getData().then((response) => {
      if (response.success) {
        setValues(response.data);
      } else {
        setError(response.error);
      }
    });
  }, []);

  return (
    <>
      <div>{JSON.stringify(values)}</div>
      <div>error: {JSON.stringify(error)}</div>
    </>
  );
}

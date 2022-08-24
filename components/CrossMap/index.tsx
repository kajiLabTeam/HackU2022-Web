import React from "react";
import dynamic from "next/dynamic";

export const CrossMap = dynamic(() => import("./CrossMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

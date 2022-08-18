import React from "react";
import { Box } from "@mui/material";

let pricesList = [
  "不明",
  "0~1000円",
  "1000~2000円",
  "2000~3000円",
  "3000~4000円",
  "4000~5000円",
  "5000~7500円",
  "7500~10000円",
  "10000~15000円",
  "15000~20000円",
  "20000円~",
];

export const Prices = ({ index }: Indexes) => {
  const [prices, setPrices] = React.useState("確認用：未設定");
  const pricesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("type Brand");
      if (res != "" && res != null) {
        setPrices(res);
        informArray[index].prices = res;
        pricesList[pricesList.length] = res;
      }
    } else {
      setPrices(event.target.value);
      let res = event.target.value + "";
      informArray[index].prices = res;
    }
  };
  return (
    <div>
      <p>
        価格帯：
        <select name="" id="" onChange={pricesChange}>
          <option value="">--価格帯を選択してください--</option>
          {pricesList.map((itemb) => (
            <option value={itemb}>{itemb}</option>
          ))}
        </select>
      </p>
      {prices}
    </div>
  );
};

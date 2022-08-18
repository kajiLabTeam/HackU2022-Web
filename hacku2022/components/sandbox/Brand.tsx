import React from "react";
import { Box } from "@mui/material";

let brandList = [
  "ユニクロ",
  "GU",
  "BEAMS",
  "Paul Smith",
  "ZARA",
  "RAGEBLUE",
  "GAP",
];
const Brand = ({ index }: Indexes) => {
  const [brand, setBrand] = React.useState("確認用：未設定");
  const brandChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("type Brand");
      if (res != "" && res != null) {
        setBrand(res);
        informArray[index].brand = res;
        brandList[brandList.length] = res;
      }
    } else {
      setBrand(event.target.value);
      let res = event.target.value + "";
      informArray[index].brand = res;
    }
  };
  return (
    <div>
      <p>
        ブランド：
        <select name="" id="" onChange={brandChange}>
          <option value="">--ブランドを選択してください--</option>
          {brandList.map((itemb) => (
            <option value={itemb}>{itemb}</option>
          ))}
          <option value="inSelf">自分で追加する</option>
        </select>
      </p>
      {brand}
    </div>
  );
};

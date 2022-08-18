import React from "react";
import { Box } from "@mui/material";

let categoryList = [
  "トップス",
  "ボトムス",
  "ベルト",
  "ネックレス",
  "ピアス・イヤリング",
  "ブレスレット・腕時計",
  "カバン",
];

interface Indexes {
  index: number;
}

const Category = ({ index }: Indexes) => {
  const [category, setCategory] = React.useState("確認用：未設定");
  const categoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("追加するカテゴリを入力してください");
      if (res != "" && res != null) {
        setCategory(res);
        informArray[index].category = res;
        categoryList[categoryList.length] = res;
      }
    } else {
      let res = event.target.value + "";
      setCategory(res);
      informArray[index].category = res;
    }
  };
  return (
    <div>
      {index}
      <p>
        カテゴリ：
        <select name="" id="" onChange={categoryChange}>
          <option value="">--カテゴリを選択してください--</option>
          {categoryList.map((item) => (
            <option value={item}>{item}</option>
          ))}
          <option value="inSelf">自分で追加する</option>
        </select>
      </p>
      {category}
    </div>
  );
};

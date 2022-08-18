import React from "react";
import { Box, Typography } from "@mui/material";

interface infoSet {
  category: string; //選ぶ 追加あり
  brand: string; //手入力
  prices: string; //選ぶ 追加なし
}

var informArray: infoSet[] = [
  { category: "", brand: "", prices: "" },
  { category: "", brand: "", prices: "" },
  { category: "", brand: "", prices: "" },
];

const OneSet = () => {
  const [info, setInfo] = React.useState(informArray);
  const [gomi, setGomi] = React.useState(3);
  return (
    <Box>
      {info.map((item, index) => (
        <Box>
          <Box
            onClick={() => {
              console.log(informArray.map((aaa) => aaa));
              console.log("indeの値は" + index);
              let tmp = info;
              tmp.splice(index, 1);
              setInfo(tmp);
              informArray = tmp;
              setGomi(gomi + 1);
              console.log(informArray.map((aaa) => aaa));
            }}
          >
            {"この項目を削除する"}
          </Box>
          <Box>
            <Category index={index} />
            <Brand index={index} />
            <Prices index={index} />
          </Box>
        </Box>
      ))}
      <Box
        onClick={() => {
          console.log(info.length);
          info[info.length] = {
            category: "",
            brand: "",
            prices: "",
          };
          setInfo(info);
          informArray = info;
          setGomi(gomi + 1);
        }}
      >
        +項目を増やす+
      </Box>
    </Box>
  );
};

import React from "react";
import { Button, Box, Stack, IconButton } from "@mui/material";
import { ClothesSingleInput, Clothes } from "./ClothesSingleInput";
import DeleteIcon from "@mui/icons-material/Delete";

const initialState: Clothes[] = [
  {
    category: "トップス",
    brand: "ユニクロ",
    price: "0~1000",
  },
];

const initialValue: Clothes = {
  category: "トップス",
  brand: "ユニクロ",
  price: "0~1000",
};

export interface ClothesInputProps {
  value?: Clothes[];
  onChange?: (value: Clothes[]) => void;
}

export const ClothesInput = ({ value, onChange }: ClothesInputProps) => {
  //{value,onChange}の二つの要素が入ってきて、それはClothesInputPropsの中身を参照している
  const [values, setValues] = React.useState(value ?? initialState);
  //useStateでsetValueの定義 initialStateは初期値 ??はnullが入っていないかの確認らしい
  return (
    <Stack spacing={2}>
      {values.map((value, index) => (
        <Box key={Math.random()} sx={{ position: "relative" }}>
          <IconButton
            children={<DeleteIcon />}
            color="error"
            sx={{
              position: "absolute",
              top: "6px",
              right: "6px",
            }}
            onClick={() => {
              const newValue = values.filter((item, i) => index !== i);
              onChange && onChange(newValue);
              setValues(newValue);
            }}
          />
          <ClothesSingleInput
            value={value}
            onChange={(v) => {
              values[index] = v;
              onChange && onChange(values);
              setValues(values);
            }}
          />
        </Box>
      ))}
      {/*この下のButtonの中で服の追加ボタンを表示している*/}
      <Button
        variant="outlined"
        sx={{ width: "200px", alignSelf: "center" }}
        onClick={() => {
          onChange && onChange([...values, initialValue]);
          setValues([...values, initialValue]);
        }}
      >
        服を追加
      </Button>
    </Stack>
  );
};

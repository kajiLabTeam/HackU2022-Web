import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { CustomSelect, CustomSelectItem } from "./CustomSelect";

const categoryList: CustomSelectItem[] = [
  { text: "トップス", value: "tops" },
  { text: "ボトムス", value: "bottoms" },
  { text: "ベルト", value: "belt" },
  { text: "ネックレス", value: "necklace" },
  { text: "ピアス・イヤリング", value: "earrings" },
  { text: "ブレスレット・腕時計", value: "bracelets/watches" },
  { text: "カバン", value: "bag" },
];

const brandList: CustomSelectItem[] = [
  { text: "ユニクロ", value: "uniqlo" },
  { text: "GAP", value: "gap" },
  { text: "GU", value: "gu" },
  { text: "BEAMS", value: "beams" },
  { text: "Paul Smith", value: "paul-smith" },
  { text: "ZARA", value: "zara" },
  { text: "RAGEBLUE", value: "rageblue" },
];

const priceList: CustomSelectItem[] = [
  { text: "不明", value: "0" },
  { text: "0~1000円", value: "1000" },
  { text: "1000~2000円", value: "2000" },
  { text: "2000~3000円", value: "3000" },
  { text: "3000~4000円", value: "4000" },
  { text: "4000~5000円", value: "5000" },
  { text: "5000~7500円", value: "7500" },
  { text: "7500~10000円", value: "10000" },
  { text: "10000~15000円", value: "15000" },
  { text: "15000~20000円", value: "20000" },
  { text: "20000円~", value: "99999" },
];

const initialState: Clothes = {
  category: "tops",
  brand: "uniqlo",
  price: "1000",
};

export interface Clothes {
  category: string;
  brand: string;
  price: string;
}

export interface ClothesSingleInputProps {
  value?: Clothes;
  onChange?: (clothes: Clothes) => void;
}

export const ClothesSingleInput = ({
  value,
  onChange,
}: ClothesSingleInputProps) => {
  const [values, setValues] = React.useState(value ?? initialState);
  return (
    <Paper sx={{ padding: 4, paddingTop: 6 }}>
      <Stack spacing={2}>
        <CustomSelect
          label="カテゴリ"
          items={categoryList}
          value={values.category}
          onChange={(value) => {
            onChange && onChange({ ...values, category: value });
            setValues({ ...values, category: value });
          }}
        />
        <CustomSelect
          label="ブランド"
          items={brandList}
          value={values.brand}
          onChange={(value) => {
            onChange && onChange({ ...values, brand: value });
            setValues({ ...values, brand: value });
          }}
        />
        <CustomSelect
          label="価格帯"
          items={priceList}
          value={values.price}
          onChange={(value) => {
            onChange && onChange({ ...values, price: value });
            setValues({ ...values, price: value });
          }}
        />
      </Stack>
    </Paper>
  );
};

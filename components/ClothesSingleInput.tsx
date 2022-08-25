import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { CustomSelect, CustomSelectItem } from "./CustomSelect";

const categoryList: CustomSelectItem[] = [
  { text: "トップス", value: "トップス" },
  { text: "ジャケット", value: "ジャケット" },
  { text: "パンツ", value: "パンツ" },
  { text: "スカート", value: "スカート" },
  { text: "ワンピース", value: "ワンピース" },
  { text: "その他", value: "その他" },
];

const brandList: CustomSelectItem[] = [
  { text: "ユニクロ", value: "ユニクロ" },
  { text: "GAP", value: "GAP" },
  { text: "GU", value: "GU" },
  { text: "BEAMS", value: "BEAMS" },
  { text: "Paul Smith", value: "Paul Smith" },
  { text: "ZARA", value: "ZARA" },
  { text: "RAGEBLUE", value: "RAGEBLUE" },
  { text: "Right-on", value: "Right-on" },
  { text: "h&m", value: "h&m" },
  { text: "無印良品", value: "無印良品" },
  { text: "WEGO", value: "WEGO" },
  { text: "その他", value: "その他" },
];

const priceList: CustomSelectItem[] = [
  { text: "不明", value: "不明" },
  { text: "0~1000", value: "0~1000" },
  { text: "1001~3000", value: "1001~3000" },
  { text: "3001~5000", value: "3001~5000" },
  { text: "5001~10000", value: "5001~10000" },
  { text: "10001~", value: "10001~" },
];

const initialState: Clothes = {
  category: "トップス",
  brand: "uniqlo",
  price: "0~1000",
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

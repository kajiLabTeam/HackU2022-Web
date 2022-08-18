import React from "react";
import type { NextPage } from "next";
import {
  Box,
  Typography,
  Switch,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Container,
} from "@mui/material";

const categoryList: CustomSelectItem[] = [
  { text: "トップス", value: "tops" },
  { text: "ボトムス", value: "bottoms" },
  { text: "ベルト", value: "belt" },
  { text: "ネックレス", value: "necklace" },
  { text: "ピアス・イヤリング", value: "earrings" },
  { text: "ブレスレット・腕時計", value: "bracelets/watches" },
  { text: "カバン", value: "bag" },
];

const Home: NextPage = () => {
  const [value, setValue] = React.useState("tops");
  return (
    <Container maxWidth="sm">
      <Stack spacing={4}>
        <FormControlLabel control={<Switch defaultChecked />} label="公開" />
        <CustomSelect
          label="カテゴリ"
          items={categoryList}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Typography>{`カテゴリのvalue => ${value}`}</Typography>
        <Box>
          <Typography>ここにタイトル</Typography>
          <Typography>ここに文章</Typography>
        </Box>
        <Typography>登録</Typography>
      </Stack>
    </Container>
  );
};

interface CustomSelectItem {
  text: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  items: CustomSelectItem[];
  value?: string;
  onChange?: (value: string) => void;
}

const CustomSelect = ({ label, items, value, onChange }: CustomSelectProps) => {
  const [formValue, setFormValue] = React.useState(value ?? "");
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={formValue}
        label={label}
        onChange={(event) => {
          setFormValue(event.target.value);
          onChange && onChange(event.target.value);
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Home;

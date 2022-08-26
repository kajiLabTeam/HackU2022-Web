import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export interface CustomSelectItem {
  //セレクトアイテム
  text: string;
  value: string;
}

export interface CustomSelectProps {
  //セレクトプロップス
  label: string;
  items: CustomSelectItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export const CustomSelect = ({
  //外部から呼び出される関数
  label,
  items,
  value,
  onChange,
}: CustomSelectProps) => {
  const [formValue, setFormValue] = React.useState(value ?? "");
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={formValue}
        label={label}
        onChange={(event) => {
          if (event.target.value == "その他") {
            let res = window.prompt("入力してください");
            if (res != "" && res != null) {
              setFormValue(res);
              onChange && onChange(res);
            }
          } else {
            setFormValue(event.target.value);
            onChange && onChange(event.target.value);
          }
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

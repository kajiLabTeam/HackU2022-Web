import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export interface CustomSelectItem {
  text: string;
  value: string;
}

export interface CustomSelectProps {
  label: string;
  items: CustomSelectItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export const CustomSelect = ({
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

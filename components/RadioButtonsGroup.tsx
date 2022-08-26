import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export interface GenderInputProps {
  value?: number;
  onChange?: (value: number) => void;
}

export const RadioButtonsGroup = ({ value, onChange }: GenderInputProps) => {
  const [values, setValues] = React.useState(value);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
      <RadioGroup
        onChange={(event) => {
          const gender = event.target.value;
          const genNum: number = gender === "1" ? 1 : gender === "2" ? 2 : 3;
          onChange && onChange(genNum);
          setValues(genNum);
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        value={value === 1 ? "1" : value === 2 ? "2" : "3"}
        name="radio-buttons-group"
      >
        <FormControlLabel value="2" control={<Radio />} label="女" />
        <FormControlLabel value="1" control={<Radio />} label="男" />
        <FormControlLabel value="3" control={<Radio />} label="その他" />
      </RadioGroup>
    </FormControl>
  );
};

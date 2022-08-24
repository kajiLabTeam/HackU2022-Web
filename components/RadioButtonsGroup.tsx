import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export interface GenderInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const RadioButtonsGroup = ({ value, onChange }: GenderInputProps) => {
  const [values, setValues] = React.useState("");
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
      <RadioGroup
        onChange={(event) => {
          onChange && onChange(event.target.value);
          setValues(event.target.value);
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="2"
        name="radio-buttons-group"
      >
        <FormControlLabel value="2" control={<Radio />} label="女" />
        <FormControlLabel value="1" control={<Radio />} label="男" />
        <FormControlLabel value="3" control={<Radio />} label="その他" />
      </RadioGroup>
    </FormControl>
  );
};

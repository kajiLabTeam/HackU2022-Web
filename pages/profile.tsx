import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Button,
  Switch,
  FormControlLabel,
  Stack,
  TextField,
  Container,
  NativeSelect,
  FormControl,
  InputLabel,
  Alert,
  Snackbar,
  Box,
  AlertColor,
} from "@mui/material";

import {
  CustomAppBar,
  ClothesInput,
  CloudinaryUpload,
  SimpleBottomNavigation,
  RadioButtonsGroup,
} from "../components";
import axios from "axios";

import useSWR, { useSWRConfig } from "swr";

const initialState = {
  imageURL: "",
  name: "nanashi",
  gender: "2", //1,男 2,女 3,その他
  height: "160",
  age: "20",
};

interface UserData {
  id: string;
  ble: string;
  mail: string;
  name: string;
  gender: number;
  age: string;
  height: number;
  icon: string;
  created_at?: Date;
  update_at?: Date;
}

const Home: NextPage = () => {
  const router = useRouter();

  //Snackbar用の
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor>("info");
  const [message, setMessage] = React.useState("");
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  //const { data: userData } = useSWR<UserData>(`/users/${user_id}`, {
  const { data: userData } = useSWR<UserData>("/users/-0MlNSjap", {
    revalidateOnFocus: false,
  });
  const [formValue, setFormValue] = React.useState<UserData>();
  React.useEffect(() => {
    userData && setFormValue(userData);
  }, [userData]);

  return (
    <>
      {/* <h1>user_id:{router.query.userId}</h1> */}
      <CustomAppBar title="プロフィール更新" />

      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <CloudinaryUpload
            beforeImaheURL={formValue?.icon}
            onChange={(e) => userData && setFormValue({ ...userData, icon: e })}
          />
          <TextField
            id="standard-basic"
            label="名前"
            variant="standard"
            value={formValue?.name ?? ""}
            onChange={(e) => {
              userData && setFormValue({ ...userData, name: e.target.value });
            }}
          />
          <RadioButtonsGroup
            value={formValue?.gender}
            onChange={(e) => {
              userData && setFormValue({ ...userData, gender: e });
            }}
          />
          <TextField
            id="standard-number"
            label="身長"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValue?.height ?? {}}
            variant="standard"
            onChange={(e) => {
              const tmpHeight = e.target.value;
              userData &&
                setFormValue({ ...userData, height: Number(tmpHeight) });
            }}
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              年齢:{formValue?.age ?? ""}
            </InputLabel>
            <NativeSelect
              value={formValue?.age ?? ""}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={(e) => {
                userData && setFormValue({ ...userData, age: e.target.value });
              }}
            >
              <option value="~10">~10</option>
              <option value="11~15">11~15</option>
              <option value="16~20">16~20</option>
              <option value="21~25">21~25</option>
              <option value="26~30">26~30</option>
              <option value="31~35">31~35</option>
              <option value="36~40">36~40</option>
              <option value="41~45">41~45</option>
              <option value="46~50">46~50</option>
              <option value="51~55">51~55</option>
              <option value="56~60">56~60</option>
              <option value="56~60">56~60</option>
              <option value="61~">61~</option>
            </NativeSelect>
          </FormControl>
          <Box></Box>
          <Button
            variant="contained"
            onClick={async () => {
              try {
                const url = "https://xclothes.harutiro.net/users/-0MlNSjap";
                const response = await axios.put(url, formValue);
                console.log(response);
                //router.replace("/hoge"); // 登録後の遷移先
                setOpen(true);
                setSeverity("success");
                setMessage("更新しました");
              } catch (e) {
                console.error(e);
                setOpen(true);
                setSeverity("error");
                setMessage("更新に失敗しました");
              }
            }}
          >
            更新
          </Button>

          {/* デバッグよう */}
          {/* <pre>{JSON.stringify(formValue, null, 2)}</pre> */}
        </Stack>
      </Container>
      <SimpleBottomNavigation
        pageNum={0}
        user_id={
          typeof router.query.moveId === "string"
            ? router.query.moveId
            : "error"
        }
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity ?? "info"}
          sx={{ width: "100%" }}
        >
          {message ?? "No Message"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;

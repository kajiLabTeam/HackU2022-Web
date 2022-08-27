import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Button,
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
  CloudinaryUpload,
  SimpleBottomNavigation,
  RadioButtonsGroup,
} from "../components";
import axios from "axios";
import useSWR from "swr";
import { User } from "../types";
import { baseURL } from "../src/baseURL";
import {v4 as uuidv4} from 'uuid';


interface SignUp {
    name:string;
    ble:string;
    icon:string;
    gender:number;
    age:string;
    height:number;
    mail:string;
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

  const[userInfo,setUserInfo]=React.useState();
  

  return (
    <>
      <CustomAppBar title="サインアップ" />

      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <CloudinaryUpload
            beforeImaheURL={userInfo?.icon}
            onChange={(e) => setUserInfo({...userInfo,icon:e})}
          />
          <TextField
            id="standard-basic"
            label="名前"
            variant="standard"
            value={userInfo?.name}
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
            }}
          />
          <RadioButtonsGroup
            value={userInfo?.gender}
            onChange={(e) => {
              setUserInfo({ ...userInfo, gender: e });
            }}
          />
          <TextField
            id="standard-number"
            label="身長"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={userInfo?.height ?? {}}
            variant="standard"
            onChange={(e) => {
              const tmpHeight = e.target.value;
              setUserInfo({ ...userInfo, height: Number(tmpHeight) });
            }}
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              年齢:{userInfo?.age ?? ""}
            </InputLabel>
            <NativeSelect
              value={userInfo?.age ?? ""}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={(e) => {
                setUserInfo({ ...userInfo, age: e.target.value });
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
              <option value="61~">61~</option>
            </NativeSelect>
          </FormControl>
          <Box></Box>
          <Button
            variant="contained"
            onClick={async () => {
              router.query.googleInfo && setUserInfo({...userInfo , mail : router.query.googleInfo});
              setUserInfo({...userInfo , ble : uuidv4()});
              try {
              
                //const url = "https://xclothes.harutiro.net/users/-0MlNSjap";
                const url = `${baseURL}/users/-0MlNSjap`;

                const response = await axios.put(url, formValue);
                console.log(response);

                setOpen(true);
                setSeverity("success");
                setMessage("登録しました");

                // ここに遷移画面
              } catch (e) {
                console.error(e);
                setOpen(true);
                setSeverity("error");
                setMessage("登録に失敗しました");
              }
            }}
          >
            登録
          </Button>
          
          <pre>{JSON.stringify(userInfo, null, 2)}</pre>
          {/* デバッグよう */}
          {/* <pre>{JSON.stringify(formValue, null, 2)}</pre> */}
        </Stack>
      </Container>
      <SimpleBottomNavigation
        pageNum={1}
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

import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Button,
  Stack,
  TextField,
  Container,
  Snackbar,
  Alert,
  AlertColor,
  Box,
} from "@mui/material";
import { CustomAppBar, SimpleBottomNavigation } from "../components";
import axios from "axios";

const tmpMail: string = "yada@aitech.ac.jp";
const tmpValue = {
  name: "fuma",
  ble: "qawse",
  icon: "https://res.cloudinary.com/fuma",
  gender: 1,
  age: "20〜25",
  height: 175,
  mail: "fuma@aitech.ac.jp",
};

interface Tmp {
  id: string;
  ble: string;
  mail: string;
  name: string;
  gender: number;
  age: string;
  height: number;
  icon: string;
  created_at: Date;
  update_at: Date;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [eMail, setEMail] = React.useState(tmpMail);
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

  return (
    <>
      {/* <h1>user_id:{router.query.userId}</h1> */}
      <CustomAppBar title="ログイン" />
      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <Box></Box>
          <Box></Box>
          <TextField
            id="standard-basic"
            label="e-mail"
            variant="standard"
            // value={values.name}
            onChange={(e) => setEMail(e.target.value)}
          />

          <Box></Box>
          <Box></Box>

          <Button
            variant="contained"
            onClick={async () => {
              try {
                const url = `https://xclothes.harutiro.net/users/mail/${eMail}`;
                //const url = "https://xclothes.harutiro.net/users";

                const response = await axios.get(url);
                console.log(response);
                //console.log(response.data.id);
                //router.replace("/addCoordinate"); // 登録後の遷移先

                //router.replace(`/${response.data.id}`); // 登録後の遷移先
                router.push({
                  pathname: `/${response.data.id}`, //URL
                  query: { moveId: response.data.id }, //検索クエリ
                });

                setOpen(true);
                setSeverity("success");
                setMessage("ログインに成功しました");
              } catch (e) {
                console.error(e);
                setOpen(true);
                setSeverity("error");
                setMessage("ログインに失敗しました");
              }
            }}
          >
            ログイン
          </Button>

          {/* <Button
            variant="contained"
            onClick={async () => {
              try {
                const url = "https://xclothes.harutiro.net/users/signup";
                const response: Tmp = await axios.post(url, tmpValue);
                console.log(response);
                router.replace("/addCoordinate"); // 登録後の遷移先
              } catch (e) {
                console.error(e);
              }
            }}
          >
            postのテスト
          </Button> */}

          <pre>{JSON.stringify(eMail, null, 2)}</pre>
          {/* <pre>{JSON.stringify(tmpValue, null, 2)}</pre> */}
        </Stack>
      </Container>
      {/* <SimpleBottomNavigation /> */}
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

/*
onClick={() => {
            //console.log("kita");
            router.push({
              pathname: "/evaluationDetails", //URL
              query: { input: id }, //検索クエリ
            });
          }}

上の受け取る形
{router.query.input}



/hoge    のなかの hoge が受け取れる
router.query.userId
*/

//  https://nextjs.org/
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
  Typography,
} from "@mui/material";
import { CustomAppBar } from "../components";
import axios from "axios";

//ここからfirebase関連
import { initFirebase, app } from "../src/xclotheslogin"; //これ牧野くんのほう
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

//ほんへ
const tmpMail: string = "serina@aitech.ac.jp";

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

  //ここからfirebase関連
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleLogout = async () => {
    //console.log(auth);
    //logout用
    await signOut(auth);
    await router.push("/");
  };

  return (
    <>
      {/* <h1>user_id:{router.query.userId}</h1> */}

      <CustomAppBar title="ログイン" />
      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <Box></Box>
          <Box></Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={async () => {
              try {
                // signInWithRedirect(auth, provider);
                const result = await signInWithPopup(auth, provider);
                //console.log(result.user);
                console.log(result.user.email);
                //console.log(auth.currentUser);
                handleLogout();
                //console.log(auth.currentUser);
                try {
                  const url = `https://xclothes.harutiro.net/users/mail/${result.user.email}`;

                  const response = await axios.get(url);
                  console.log(response);

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
                  setMessage("登録されていないアカウントです");
                }
              } catch (e) {
                console.error(e);
                setOpen(true);
                setSeverity("error");
                setMessage("ログインに失敗しました");
              }
            }}
            sx={{ mt: 7, mb: 2, color: "secondary" }}
          >
            Googleアカウントでログイン
          </Button>
          <Typography variant="subtitle2">
            ※すれ違いに必要なデータをスマートフォンから取得する必要があります。
            <br />
            スマホアプリからサインアップを行ってください。
          </Typography>

          <Box></Box>
          <Box></Box>
          <p>↓デバッグ用↓</p>

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

                const response = await axios.get(url);
                console.log(response);

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

          <pre>{JSON.stringify(eMail, null, 2)}</pre>
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

/*//これは消さずに残しておきたい
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

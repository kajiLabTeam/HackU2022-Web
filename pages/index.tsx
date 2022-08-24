import React from "react";
import type { NextPage } from "next";
import {
  Button,
  Switch,
  FormControlLabel,
  Stack,
  Container,
  AlertColor,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  CustomAppBar,
  ClothesInput,
  CloudinaryUpload,
  SimpleBottomNavigation,
} from "../components";
import axios from "axios";
import { FlashlightOnTwoTone } from "@mui/icons-material";

const initialState = {
  imageURL: "",
  public: false,
  clothes: [
    {
      category: "トップス",
      brand: "uniqlo",
      price: "0~1000",
    },
  ],
  title: "",
  description: "",
};

const Home: NextPage = () => {
  const [values, setValues] = React.useState(initialState);
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
      <CustomAppBar title="服登録" />
      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <CloudinaryUpload
            onChange={(imgUrl) => setValues({ ...values, imageURL: imgUrl })}
          />
          <FormControlLabel
            control={
              <Switch
                onChange={() =>
                  setValues({ ...values, public: !values.public })
                }
              />
            }
            label="すれちがった人以外にも服を公開する"
          />
          <ClothesInput
            value={values.clothes}
            onChange={(v) => setValues({ ...values, clothes: v })}
            //valuesの中のclothesの中に、vの値を入れている
            // ->　vの値の中身がわかれば良い
          />
          {/*
          <TextField
            label="ここにタイトル"
            variant="outlined"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          <TextField
            label="ここに文章"
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
          */}
          <Button
            variant="contained"
            onClick={async () => {
              try {
                const url = "服登録のURL";
                const response = await axios.post(url, values);
                console.log(response);
                //router.replace("/hoge"); // 登録後の遷移先
              } catch (e) {
                console.error(e);
              }
            }}
          >
            登録
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setSeverity("success");
              setMessage("登録しました");
            }}
          >
            成功した時
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
              setSeverity("error");
              setMessage("登録に失敗しました");
            }}
          >
            失敗した時
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Stack>
      </Container>
      <SimpleBottomNavigation pageNum={0} />
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

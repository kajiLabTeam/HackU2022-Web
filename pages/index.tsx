//  https://nextjs.org/

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
import { info } from "console";

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

interface wear {
  category: string;
  brand: string;
  price: string;
}

interface Coordinate {
  public: boolean;
  image: string;
  user_id: string;
  wears: wear[];
}

const testSendCoordinate: Coordinate = {
  public: false,
  image: "aaaab",
  user_id: "-0MlNSjap",
  wears: [
    { category: "トップス", brand: "無印良品", price: "1000〜3000" },
    { category: "ボトムス", brand: "ユニクロ", price: "1000〜3000" },
  ],
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
            label={
              values.public === true
                ? "すれちがった人以外にも服を公開する"
                : "すれ違った人にのみ服を公開する"
            }
            //label="すれちがった人以外にも服を公開する"
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
                const url = "https://xclothes.harutiro.net/coordinates";
                //const url = "/coordinates";
                const response = await axios.post(url, testSendCoordinate);
                console.log(response);

                setOpen(true);
                setSeverity("success");
                setMessage("登録しました");
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

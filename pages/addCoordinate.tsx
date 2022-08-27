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
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";
import {
  CustomAppBar,
  ClothesInput,
  CloudinaryUpload,
  SimpleBottomNavigation,
} from "../components";
// import ChangeColor from "../components/ChangeColor";
import axios from "axios";
import { useRouter } from "next/router";
import { Coordinate } from "../types";
import { baseURL } from "../src/baseURL";

const initialState: Coordinate = {
  public: false,
  image:
    "https://res.cloudinary.com/dhbnknlos/image/upload/v1661490750/My%20Uploads/kvb8nlautggnhlqmvw7u.jpg",
  user_id: "",
  wears: [{ category: "トップス", brand: "ユニクロ", price: "0~1000" }],
};

const Home: NextPage = () => {
  //router設定
  const router = useRouter();

  initialState.user_id =
    typeof router.query.moveId === "string" ? router.query.moveId : "error";

  const [values, setValues] = React.useState<Coordinate>(initialState);

  //Snackbarの用
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
            beforeImaheURL={values?.image}
            onChange={(v) => setValues({ ...values, image: v })}
          />

          <Typography variant="subtitle2" sx={{ marginLeft: "30%" }}>
            ※顔が写っていない写真を使用してください
          </Typography>

          <FormControlLabel
            control={
              <Switch
                onChange={() =>
                  setValues({ ...values, public: !values.public })
                }
              />
            }
            label={
              values?.public === true
                ? "すれちがった人以外にも服を公開する"
                : "すれ違った人にのみ服を公開する"
            }
          />

          <ClothesInput
            value={values?.wears}
            onChange={(v) => setValues({ ...values, wears: v })}
          />

          <Button
            variant="contained"
            onClick={async () => {
              try {
                //const url = "https://xclothes.harutiro.net/coordinates";
                const url = `${baseURL}/coordinates`;

                const response = await axios.post(url, values);
                console.log("レスポンス");
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
        </Stack>
      </Container>
      {/* <p>id:{router.query.moveID}</p> */}
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

      {/* デバッグよう  */}
      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
    </>
  );
};

export default Home;

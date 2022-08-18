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
} from "@mui/material";
import {
  CustomAppBar,
  ClothesInput,
  CloudinaryUpload,
  SimpleBottomNavigation,
  ActionAreaCard,
} from "../components";
import axios from "axios";

const initialState = {
  public: true,
  clothes: [
    {
      category: "tops",
      brand: "uniqlo",
      price: "1000",
    },
  ],
  title: "",
  description: "",
};

const Home: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = React.useState(initialState);
  return (
    <>
      <CustomAppBar title="服登録" />
      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <CloudinaryUpload />
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                onChange={() =>
                  setValues({ ...values, public: !values.public })
                }
              />
            }
            label="公開"
          />
          <ClothesInput
            value={values.clothes}
            onChange={(v) => setValues({ ...values, clothes: v })}
          />
          <br />
          <br />
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
                router.replace("/hoge"); // 登録後の遷移先
              } catch (e) {
                console.error(e);
              }
            }}
          >
            登録
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Stack>
      </Container>
      <SimpleBottomNavigation />
    </>
  );
};

export default Home;

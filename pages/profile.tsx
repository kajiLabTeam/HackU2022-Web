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
  RadioButtonsGroup,
} from "../components";
import axios from "axios";

const initialState = {
  imageURL: "",
  name: "nanashi",
  gender: "2", //1,男 2,女 3,その他
  height: "160",
  age: "20",
};

const Home: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = React.useState(initialState);
  return (
    <>
      <CustomAppBar title="プロフィール更新" />
      <Container maxWidth="sm" sx={{ padding: 6 }}>
        <Stack spacing={4}>
          <CloudinaryUpload
            value={values.imageURL}
            onChange={(e) => setValues({ ...values, imageURL: e })}
          />
          <TextField
            id="standard-basic"
            label="名前"
            variant="standard"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <RadioButtonsGroup
            value={values.gender}
            onChange={(e) => setValues({ ...values, gender: e })}
          />
          <TextField
            id="standard-number"
            label="身長"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue="160"
            variant="standard"
            //value={values.height}
            onChange={(e) => setValues({ ...values, height: e.target.value })}
          />
          <TextField
            id="standard-number"
            label="年齢"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            defaultValue="20"
            onChange={(v) => setValues({ ...values, age: v.target.value })}
          />
          {/*
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
          */}
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
      <SimpleBottomNavigation pageNum={1} />
    </>
  );
};

export default Home;

import React from "react";
import type { NextPage } from "next";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
} from "../../../components";
import { useRouter } from "next/router";
import { Like, Coordinate, User } from "../../../types";
import useSWR from "swr";

interface SendUser {
  gender: number;
  age: string;
}

//ここに追加していく感じ
const sendUsersInfo: SendUser[] = [{ gender: 1, age: "21~25" }];

const DetailsPage: NextPage = () => {
  const router = useRouter();
  // const [sendUsers, setSendUsers] = React.useState(sendUsersInfo);  //さっきまでいじってたとこ

  const { data: likes } = useSWR<Like[]>(
    `/coordinates/${router.query.coordinateId}/likes`
  );

  const { data: coordinate } = useSWR<Coordinate>(
    `/coordinates/${router.query.coordinateId}`
  );

  const { data: user } = useSWR<User>(`/users/${coordinate?.user_id}`);

  // const { data: coordinates } = useSWR<Coordinate[]>(
  //   `/users/${router.query.userId}/coordinates`
  // );

  //さっきまでいじってたとこ
  // likes?.map((value, index) => {
  //   const { data: send_user } = useSWR<User>(`/users/${value.send_user_id}`);
  //   let sendUserInfo: SendUser = {
  //     gender: send_user?.gender,
  //     age: send_user?.age,
  //   };
  //   sendUsers.push([send_user?.gender, send_user?.age]);
  // });

  return (
    <Box>
      <CustomAppBar title="評価の詳細" />

      {/* <h1>1:{router.query.userId}</h1>
      <h1>2:{router.query.coordinateId}</h1> */}

      <CrossMap
        positions={
          (likes &&
            likes.map((like) => {
              return { lat: like.lat, lon: like.lon };
            })) ??
          []
        }
      />

      {/* <Container maxWidth="sm"> */}
      <Box height="2em"></Box>
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} key={Math.random()}>
            <Box sx={{ marginLeft: "12%" }}>
              <img
                src={coordinate && coordinate.image}
                width="300vx"
                // height="100vw"
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} key={Math.random()}>
            <Box sx={{ marginLeft: "15%", marginTop: "10%" }}>
              <Typography variant="h3" sx={{ display: "inline-block" }}>
                {likes && likes.length}
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "inline-block", marginLeft: "4px" }}
              >
                いいね
              </Typography>

              <Typography
                variant="h5"
                sx={{ marginTop: "25px", marginLeft: "10px" }}
              >
                {(() => {
                  if (user) {
                    if (router.query.userId !== coordinate?.user_id) {
                      if (user.gender === 1) return "男性";
                      else if (user.gender === 2) return "女性";
                      else return "その他";
                    } else return "あなたの投稿です";
                  }
                })()}

                {/* {user && user.gender === 1
                  ? "男性"
                  : user && user.gender === 2
                  ? "女性"
                  : user && user.gender === 3
                  ? "その他"
                  : ""} */}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "8px", marginLeft: "10px" }}
              >
                {user &&
                  router.query.userId !== coordinate?.user_id &&
                  user.height + "cm"}
                {/* {user && user.height}cm */}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "8px", marginLeft: "10px" }}
              >
                {user &&
                  router.query.userId !== coordinate?.user_id &&
                  user.age + "歳"}
                {/* {user && user.age}歳 */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <SimpleBottomNavigation
        //pageNum={99}
        user_id={
          typeof router.query.userId === "string"
            ? router.query.userId
            : "error"
        }
      />
    </Box>
  );
};

export default DetailsPage;

//比較のときに役に立つサイト https://qiita.com/akifumii/items/c302fdc633d8eba2af0a

//<div>
//  {(() => {
//    if (true) {
//      return "hello world";
//    }
//  })()}
//</div>;

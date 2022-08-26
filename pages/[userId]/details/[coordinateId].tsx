import React from "react";
import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
} from "../../../components";
import { useRouter } from "next/router";
import { Like, Coordinate, User } from "../../../types";
import useSWR from "swr";

const DetailsPage: NextPage = () => {
  const router = useRouter();

  const { data: likes } = useSWR<Like[]>(
    `/coordinates/${router.query.coordinateId}/likes`
  );

  const { data: coordinate } = useSWR<Coordinate>(
    `/coordinates/${router.query.coordinateId}`
  );

  const { data: user } = useSWR<User>(`/users/${coordinate?.user_id}`);

  return (
    <Box>
      <CustomAppBar title="評価の詳細" />

      {/* <h1>1:{router.query.userId}</h1>
      <h1>2:{router.query.coordinateId}</h1> */}

      <CrossMap />

      {/* <Container maxWidth="sm"> */}
      <Container maxWidth="md">
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          <Box sx={{ marginLeft: "5vw" }}>
            <img
              src={coordinate && coordinate.image}
              width="300vx"
              // height="100vw"
            ></img>
          </Box>
          <Box sx={{ margin: "30px", marginLeft: "3vw" }}>
            <Typography variant="h3" sx={{ display: "flex" }}>
              {likes && likes.length}
              <Typography variant="h5" sx={{ marginTop: "22px" }}>
                いいね
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              sx={{ marginTop: "25px", marginLeft: "10px" }}
            >
              {user && user.gender === 1
                ? "男性"
                : user && user.gender === 2
                ? "女性"
                : "その他"}
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "8px", marginLeft: "10px" }}
            >
              {user && user.height}cm
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "8px", marginLeft: "10px" }}
            >
              {user && user.age}歳
            </Typography>
          </Box>
        </Box>
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

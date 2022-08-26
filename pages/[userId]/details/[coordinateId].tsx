import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
} from "../../../components";
import { useRouter } from "next/router";
import { Like, Coordinate, User } from "../../../types";
import useSWR from "swr";

const likesCount: number = 12;
const age: number = 20;
const gender: number = 2;
const personHeight: number = 160;

const DetailsPage: NextPage = () => {
  const router = useRouter();

  const { data: likes } = useSWR<Like[]>(
    `/coordinates/${router.query.coordinateId}/likes`
  );

  const { data: coordinate } = useSWR<Coordinate>(
    `/coordinates/${router.query.coordinateId}`
  );

  const { data: user } = useSWR<User>(`/users/${router.query.userId}`);

  return (
    // <Box sx={{ textAlign: "center" }}>
    <Box>
      <CustomAppBar title="評価の詳細" />

      <h1>1:{router.query.userId}</h1>
      <h1>2:{router.query.coordinateId}</h1>

      <CrossMap />

      {/* <Container maxWidth="sm"> */}
      <Container maxWidth="md">
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          {/* <Image
            src="https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg"
            width="50vw"
            height="50vw"
          ></Image> */}
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
        {/*
          <Typography variant="h4">
            coordinateId: {router.query.coordinateId}
          </Typography>
          */}
        {/*上のやつでURLに入った値を呼び出せる.消すな*/}
      </Container>

      <SimpleBottomNavigation
        //pageNum={2}
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

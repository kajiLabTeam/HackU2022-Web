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

const likesCount: number = 12;
const age: number = 20;
const gender: number = 2;
const personHeight: number = 160;

const DetailsPage: NextPage = () => {
  const router = useRouter();
  console.log(router.query.coordinateId);
  return (
    <Box sx={{ textAlign: "center" }}>
      <CustomAppBar title="評価の詳細" />

      <CrossMap />

      <Container maxWidth="sm">
        <Box sx={{ display: "flex" }}>
          <Image src="/Images/sample1.png" width="50vw" height="50vw"></Image>
          <Box>
            <Typography variant="h3">{likesCount}いいね</Typography>

            <Typography variant="h5" sx={{ marginTop: "20px" }}>
              {gender === 1 ? "男性" : gender === 2 ? "女性" : "その他"},
              {personHeight}cm,
              {age}歳
            </Typography>
          </Box>
        </Box>
        {/*
          <Typography variant="h4">
            coordinateId: {router.query.coordinateId}
          </Typography>
          */}
        {/*この上のやつでURLに入った値を呼び出せる.消すな*/}
      </Container>

      <SimpleBottomNavigation />
    </Box>
  );
};

export default DetailsPage;

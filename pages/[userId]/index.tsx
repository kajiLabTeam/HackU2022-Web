import React from "react";
import type { NextPage } from "next";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
  ImageGrid,
} from "../../components";

import useSWR from "swr";

import { Like, Coordinate } from "../../types";
import { userAgent } from "next/server";

// const tmpImages = [
//   "https://res.cloudinary.com/dificqqyf/image/upload/v1661253712/kez6ljjzjzwfkh5fedpa.jpg",
//   "https://res.cloudinary.com/dificqqyf/image/upload/v1661255156/Screenshot_from_2022-08-23_19-06-56_r8trfu.png",
// ];

const user_id: string = "oirulFjaM";

const UserPage: NextPage = () => {
  const router = useRouter();

  //swrの解説 ここでget
  //https://swr.vercel.app/ja/docs/global-configuration
  const { data: likes } = useSWR<Like[]>(
    //  `/likes?receive_user_id=${router.query.userId}`
    `/likes/${user_id}/likes`
  );

  const { data: coordinates } = useSWR<Coordinate[]>(
    `/users/${user_id}/coordinates`
  );

  return (
    <Box>
      {/* <h1>user_id:{router.query.userId}</h1> */}
      <CustomAppBar title="X clothes" />
      <Box sx={{ width: "100vw" }}>
        <CrossMap
          positions={
            (likes &&
              likes.map((like) => {
                return { lat: like.lat, lon: like.lon };
              })) ??
            []
          }
        />
      </Box>

      <Container maxWidth="lg" sx={{ padding: 6 }}>
        <ImageGrid
          CoordinateCardProp={
            (coordinates &&
              coordinates.map((coordinate) => {
                return {
                  // imageURL:"https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg",
                  imageURL: coordinate.image,
                  link: `${router.query.userId}/details/${coordinate.id}`,
                  //link: "userid/details/coordinateid",
                };
              })) ??
            []
          }
        />
        {/*
        CoordinateCardProp[]=[
        imageURL そのままのurl
        link =`${userid}/details/${clossId}`
        ]
        */}
      </Container>

      <pre>{JSON.stringify(coordinates, null, 2)}</pre>
      <SimpleBottomNavigation
        pageNum={2}
        user_id={
          typeof router.query.userId === "string"
            ? router.query.userId
            : "error"
        }
      />

      {/* if (typeof router.query.userId === "string")  */}
    </Box>
  );
};

export default UserPage;

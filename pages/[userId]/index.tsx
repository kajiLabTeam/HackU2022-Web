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

const tmpImages = [
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661253712/kez6ljjzjzwfkh5fedpa.jpg",
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661255156/Screenshot_from_2022-08-23_19-06-56_r8trfu.png",
];

const UserPage: NextPage = () => {
  const router = useRouter();

  //swrの解説
  //https://swr.vercel.app/ja/docs/global-configuration
  const { data: likes } = useSWR<Like[]>(
    `/likes?receive_user_id=${router.query.userId}`
  );

  const { data: coordinates } = useSWR<Coordinate[]>("/coordinates");

  return (
    <Box>
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
                  imageURL:
                    "https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg",
                  link: "userid/details/coordinateid",
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
      <SimpleBottomNavigation pageNum={2} />
    </Box>
  );
};

export default UserPage;

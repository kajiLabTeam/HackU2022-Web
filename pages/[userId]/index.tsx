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

interface Like {
  id: string;
  lat: number;
  lon: number;
  send_user_id: string;
  receive_user_id: string;
  coordinate_id: string;
  created_at: Date;
  update_at: Date;
}

const tmpImages = [
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661253712/kez6ljjzjzwfkh5fedpa.jpg",
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661255156/Screenshot_from_2022-08-23_19-06-56_r8trfu.png",
];

const UserPage: NextPage = () => {
  const router = useRouter();

  //swrの解説
  //https://swr.vercel.app/ja/docs/global-configuration
  const { data } = useSWR<Like[]>(
    `/likes?receive_user_id=${router.query.userId}`
    //"/ping"
  );

  return (
    <Box>
      <CustomAppBar title="X clothes" />
      <Box sx={{ width: "100vw" }}>
        <CrossMap />
      </Box>

      <Container maxWidth="lg" sx={{ padding: 6 }}>
        <ImageGrid />
        {/*
        CoordinateCardProps[]=[
        imageURL そのままのurl
        link =`${userid}/details/${clossId}`
        ]
        */}
      </Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <SimpleBottomNavigation pageNum={2} />
    </Box>
  );
};

export default UserPage;

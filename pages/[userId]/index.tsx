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

interface Send_users {
  gender: number;
  age: string;
  height: number;
  lat: string;
  lng: string;
}

interface map {
  coordinate_id: string;
  user_id: string;
  image: string;
  Send_users: Send_users[];
}

interface MapInfo {
  map: map[];
  status: boolean;
}

const tmpImages = [
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661253712/kez6ljjzjzwfkh5fedpa.jpg",
  "https://res.cloudinary.com/dificqqyf/image/upload/v1661255156/Screenshot_from_2022-08-23_19-06-56_r8trfu.png",
];

const UserPage: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<MapInfo>(`/likes?user_id=${router.query.userId}`);

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

        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CoordinateCard
              imageURL="https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg"
              link="id/details/aa"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CoordinateCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CoordinateCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CoordinateCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CoordinateCard />
          </Grid>
        </Grid> */}
      </Container>

      <SimpleBottomNavigation pageNum={2} />
    </Box>
  );
};

// export interface CoordinateCardProps {
//   imageURL?: string;
//   link?: string;
// }

// export const CoordinateCard = ({ imageURL, link }: CoordinateCardProps) => {
//   const router = useRouter();
//   return (
//     <Paper
//       sx={{
//         width: "100%",
//         height: "320px",
//         overflow: "hidden",
//         // 参考になるページ
//         // https://developer.mozilla.org/ja/docs/Web/CSS/filter
//         "&:hover": { filter: "contrast(200%)" },
//       }}
//       elevation={3}
//       onClick={() => {
//         router.push(link ?? "/");
//       }}
//     >
//       <img src={imageURL ?? "代替えURL"} width="100%" height="100%" />
//     </Paper>
//   );
// };

export default UserPage;

import React from "react";
import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
  ImageGrid,
} from "../components";
import useSWR from "swr";
import { Like, Coordinate } from "../types";

const user_id: string = "oirulFjaM";

const UserPage: NextPage = () => {
  const router = useRouter();

  //swrの解説 ここでget
  //https://swr.vercel.app/ja/docs/global-configuration
  const { data: likes } = useSWR<Like[]>(
    //  `/likes?receive_user_id=${router.query.userId}`
    "/coordinates/public/likes"
  );

  const { data: coordinates } = useSWR<Coordinate[]>(
    "/coordinates/public/coordinates"
  );

  const { data: likeNumber } = useSWR<Like[][]>(
    "/coordinates/public/coordinateId/likes"
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
              likeNumber &&
              coordinates.map((coordinate, index) => {
                return {
                  imageURL: coordinate.image,
                  link: `${router.query.moveId}/details/${coordinate.id}`,
                  // likeNum: likeNumber.length,
                  likeNum: likeNumber[index].length,
                };
              })) ??
            []
          }
        />
      </Container>

      <pre>{JSON.stringify(coordinates, null, 2)}</pre>
      <SimpleBottomNavigation
        pageNum={3}
        user_id={
          typeof router.query.moveId === "string"
            ? router.query.moveId
            : "error"
        }
      />
    </Box>
  );
};

export default UserPage;

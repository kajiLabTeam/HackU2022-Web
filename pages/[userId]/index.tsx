import React from "react";
import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import {
  CustomAppBar,
  SimpleBottomNavigation,
  CrossMap,
  ImageGrid,
} from "../../components";

import useSWR from "swr";

import { Like, Coordinate, User } from "../../types";

const UserPage: NextPage = () => {
  const router = useRouter();

  //swrの解説 ここでget
  //https://swr.vercel.app/ja/docs/global-configuration
  const { data: likes } = useSWR<Like[]>(`/likes/${router.query.userId}/likes`);

  const { data: coordinates } = useSWR<Coordinate[]>(
    `/users/${router.query.userId}/coordinates`
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
                  imageURL: coordinate.image,
                  link: `${router.query.moveId}/details/${coordinate.id}`,
                };
              })) ??
            []
          }
        />
      </Container>

      {/* <pre>{JSON.stringify(coordinates, null, 2)}</pre> */}
      <SimpleBottomNavigation
        pageNum={2}
        user_id={
          typeof router.query.userId === "string"
            ? router.query.userId
            : "error"
        }
      />
    </Box>
  );
};

export default UserPage;

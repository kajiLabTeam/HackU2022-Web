import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import { Grid, Paper, Typography } from "@mui/material";

import { useRouter } from "next/router";

export interface CoordinateCardProps {
  imageURL?: string;
  link?: string;
  likeNum?: number;
}

const tmpProp: CoordinateCardProps[] = [
  {
    imageURL:
      "https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg",
    link: "id/details/aa",
    likeNum: 0,
  },
  {},
  {},
  {},
  {},
];

//const CrossMap = ({ positions = tmpPoses }: { positions?: position[] }) => {
export const ImageGrid = ({
  CoordinateCardProp = tmpProp,
}: {
  CoordinateCardProp?: CoordinateCardProps[];
}) => {
  return (
    <Grid container spacing={2}>
      {CoordinateCardProp.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={Math.random()}>
          <CoordinateCard
            imageURL={value.imageURL}
            link={value.link}
            likeNum={value.likeNum}
          />
        </Grid>
      ))}
    </Grid>
  );
};

//別コンポーネントにした方が見た目が良い。でもめんどいし、ここのコード短いからいいや
export const CoordinateCard = ({
  imageURL,
  link,
  likeNum,
}: CoordinateCardProps) => {
  const router = useRouter();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "500px",
        overflow: "hidden",
        // 参考になるページ
        // https://developer.mozilla.org/ja/docs/Web/CSS/filter
        "&:hover": { filter: "contrast(200%)" },
      }}
      elevation={3}
      onClick={() => {
        router.push(link ?? "/");
      }}
    >
      <img src={imageURL ?? "代替えURL"} width="100%" height="92%" />
      <Typography
        variant="h5"
        color="inherit"
        component="div"
        //sx={{ textAline: "right" }}
        sx={{
          marginLeft: "285px",
          marginTop: "0px",
          display: "inline-block",
        }}
      >
        💖
      </Typography>
      <Typography
        variant="h4"
        sx={{ display: "inline-block", marginLeft: "4px" }}
      >
        {likeNum}
      </Typography>
    </Paper>
  );
};

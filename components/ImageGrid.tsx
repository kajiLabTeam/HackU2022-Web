import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { useRouter } from "next/router";

export interface CoordinateCardProps {
  imageURL?: string;
  link?: string;
}

const tmpProp: CoordinateCardProps[] = [
  {
    imageURL:
      "https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg",
    link: "id/details/aa",
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
          <CoordinateCard imageURL={value.imageURL} link={value.link} />
        </Grid>
      ))}
    </Grid>
  );
};

//別コンポーネントにした方が見た目が良い。でもめんどいし、ここのコード短いからいいや
export const CoordinateCard = ({ imageURL, link }: CoordinateCardProps) => {
  const router = useRouter();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "320px",
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
      <img src={imageURL ?? "代替えURL"} width="100%" height="100%" />
    </Paper>
  );
};

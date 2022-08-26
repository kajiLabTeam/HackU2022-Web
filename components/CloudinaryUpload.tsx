import React from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";

export interface CloudinaryUploadedResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date | string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
}

export interface ImageInputProps {
  beforeImaheURL?: string;
  onChange?: (value: string) => void;
}

export const CloudinaryUpload = ({
  beforeImaheURL,
  onChange,
}: ImageInputProps) => {
  const [imgUrl, setImgUrl] = React.useState(beforeImaheURL);

  return (
    <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
      <Box
        sx={{
          backgroundColor: "gray",
          width: "128px", //"128px" "35vw"
          height: "128px",
          // borderRadius: "64px", //"64px" "2vw"
          overflow: "hidden",
        }}
      >
        {imgUrl !== "" && (
          <img
            src={beforeImaheURL}
            width="100%"
            height="100%"
            align-self="center"
          />
        )}
      </Box>

      <Button
        variant="contained"
        component="label"
        sx={{ marginLeft: "10%" }}
        //sx={{ alignSelf: "center" }}
      >
        画像を選択
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={async (event) => {
            const files = event.target.files;
            if (files) {
              const params = new FormData();
              params.append("file", files[0]);
              params.append("upload_preset", "my-uploads");
              const { data } = await axios.post<CloudinaryUploadedResponse>(
                "https://api.cloudinary.com/v1_1/dhbnknlos/image/upload",
                params
              );
              console.log(JSON.stringify(data, null, 2));
              onChange && onChange(data.secure_url);
              setImgUrl(data.secure_url);
            }
          }}
        />
      </Button>
    </Box>
  );
};

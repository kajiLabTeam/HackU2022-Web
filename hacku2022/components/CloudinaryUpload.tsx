import React from "react";
import type { NextPage } from "next";
import { Button } from "@mui/material";
import axios from "axios";

/*
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
*/

//const Test: NextPage = () => {
export const CloudinaryUpload = () => {
  interface CloudinaryUploadedResponse {
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
  const [imgData, setImgData] = React.useState("");
  return (
    <div>
      <Button variant="contained" component="label">
        Image Upload
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
              //ImgData = data.secure_url;
              setImgData(data.secure_url);
            }
          }}
        />
      </Button>
      <img src={imgData} width="100%"></img>
    </div>
  );
};

//export default Test;
//因数での値の引き渡しがわからん

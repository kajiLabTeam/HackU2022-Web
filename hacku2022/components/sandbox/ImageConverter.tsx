import React from "react";
import { Box } from "@mui/material";

//画像アップロード
export interface DisplayedImage {
  url: string;
  size: string;
}

export const ImageConverter = () => {
  const [displayedImages, setDisplayedImages] = React.useState<
    DisplayedImage[]
  >([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatFileSize = (bytes: number, decimalPoint: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1000;
      const dm = decimalPoint || 2;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    if (event.currentTarget.files != null) {
      const files = event.currentTarget.files;
      setDisplayedImages(
        Array.from(files).map((file) => {
          return {
            url: window.URL.createObjectURL(file),
            size: formatFileSize(file.size, 1),
          };
        })
      );
    }
  };
  return (
    <div className={styles.picture}>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        multiple={true}
        className="hidden"
        id="file-input"
      />
      <label htmlFor="file-input" className={styles.circle}>
        写真選択
      </label>
      <ul className={styles.ul}>
        {displayedImages.map((displayedImage, index) => {
          return (
            <li key={`${index}-li`}>
              <img
                className={styles.img}
                src={displayedImage.url}
                alt=""
                key={`${index}-img`}
              />
              <p className={styles.p}>{displayedImage.size}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

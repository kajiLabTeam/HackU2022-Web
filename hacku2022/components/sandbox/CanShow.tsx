import React from "react";
import { Box } from "@mui/material";

var canShowFlg = true;
const CanShow = () => {
  //const [canShowFlg, setCanShowFlg] = React.useState();
  //const [canShowFlg, setCanShowFlg] = React.useState<CanShowFlg>();
  const [canShowFlg, setCanShowFlg] = React.useState(false);
  console.log(canShowFlg);
  return (
    <div className={styles.flexBox}>
      <div>公開</div>
      <div
        id="maru"
        className={styles.notSelectRect}
        onClick={() => {
          if (canShowFlg) {
            //何もしない
          } else {
            setCanShowFlg(true);

            document.getElementById("maru").style.backgroundColor = "#aaaaaa";
            document.getElementById("batsu").style.backgroundColor = "#f5f5f5";
          }
        }}
      >
        ○
      </div>
      <div></div>
      <div
        id="batsu"
        className={styles.selectRect}
        onClick={() => {
          if (canShowFlg) {
            setCanShowFlg(false);
            document.getElementById("maru").style.backgroundColor = "#f5f5f5";
            document.getElementById("batsu").style.backgroundColor = "#aaaaaa";
          } else {
            //何もしない
          }
        }}
      >
        x
      </div>
    </div>
  );
};

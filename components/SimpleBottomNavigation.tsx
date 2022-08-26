import * as React from "react";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
// icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { useRouter } from "next/router";

//const CrossMap = ({ positions = tmpPoses }: { positions?: position[] }) => {

// export const SimpleBottomNavigation = (
//   pageNum: { pageNum?: number },
//   { user_id = "aaa" }: { user_id: string }
export const SimpleBottomNavigation = ({
  pageNum,
  user_id,
}: {
  pageNum?: number;
  user_id: string;
}) =>
  //detailPageFlg: { detailPageFlg?: boolean }
  {
    const [value, setValue] = React.useState(pageNum);
    const ref = React.useRef<HTMLDivElement>(null);
    const router = useRouter();
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="服登録"
              icon={<AddAPhotoIcon />}
              onClick={() => {
                //if (detailPageFlg ?? false) {
                //  router.replace("./");
                //} else {

                //router.replace("../.././addCoordinate");

                router.push({
                  pathname: "../.././addCoordinate", //URL
                  query: { moveId: user_id }, //検索クエリ
                });
                //}
              }}
            />
            <BottomNavigationAction
              label="プロフィール"
              icon={<PersonOutlineIcon />}
              onClick={() => {
                //if (detailPageFlg ?? false) {
                //  router.replace("./profile");
                //} else {
                //router.replace("../.././profile");
                router.push({
                  pathname: "../.././profile", //URL
                  query: { moveId: user_id }, //検索クエリ
                });
                //}
              }}
            />
            <BottomNavigationAction
              label="ホーム"
              icon={<HomeIcon />}
              onClick={() => {
                //router.replace("./home");
                //if (detailPageFlg ?? false) {
                //  router.replace(`./${user_id ?? ""}`);
                //} else {
                //router.replace(`../.././${user_id ?? ""}`);
                router.push({
                  pathname: `../.././${user_id}`, //URL
                  query: { moveId: user_id }, //検索クエリ
                });
                //}
              }}
            />
            {/* <BottomNavigationAction label="設定" icon={<SettingsIcon />} /> */}
            <BottomNavigationAction
              label="全国マップ"
              icon={<LocationOnIcon />}
              onClick={() => {
                //if (detailPageFlg ?? false) {
                //  router.replace("./nationalMap");
                //} else {
                //router.replace("../.././nationalMap");
                router.push({
                  pathname: "../.././nationalMap", //URL
                  query: { moveId: user_id }, //検索クエリ
                });
                //}
              }}
            />
          </BottomNavigation>
          {/*https://qiita.com/BlackMagician/items/e0013a13a377039013ed  これで画面遷移しよう*/}
        </Paper>
      </Box>
    );
  };

/*
onClick={() => {
  router.push({
    pathname: "../.././profile", //URL
    query: { moveId: user_id }, //検索クエリ
    });
}}

上の受け取る形
{router.query.moveId}



/hoge    のなかの hoge が受け取れる
router.query.userId
*/

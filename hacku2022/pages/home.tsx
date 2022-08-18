import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";
import React from "react";

import {
  CustomAppBar,
  ClothesInput,
  CloudinaryUpload,
  SimpleBottomNavigation,
} from "../components";

function MapPage() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div>
      <CustomAppBar title="X clothes" />
      <br />
      <br />
      <div className={styles.mapID}>
        <Map />
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default MapPage;

import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import "../styles/globals.css";

const SERVER_URL = "https://xclothes.harutiro.net"; //public
//const SERVER_URL = "https://dev-xclothes.harutiro.net"; //local

const fetcher = async (path: string) => {
  const { data } = await axios.get(SERVER_URL + path);
  return data;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

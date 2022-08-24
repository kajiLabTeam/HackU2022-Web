import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import "../styles/globals.css";

const SERVER_URL = "http://20.168.98.13:8080";

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

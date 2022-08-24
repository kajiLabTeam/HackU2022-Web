import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import "../styles/globals.css";

//const SERVER_URL = "https://lavlus-api.ayaka.work";
const SERVER_URL = "https://xclothes.harutiro.net";

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

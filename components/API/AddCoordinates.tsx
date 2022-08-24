import axios from "axios";
import React from "react";

// "put_flag": true,
//     "public": false,
//     "image": "aaaaa",
//     "ble": "aaaa",
//     "user_id": "W22h7S0tM",
//     "wears": [
//         {
//             "category": "string",
//             "brand": "string",
//             "price": "string"
//         }
//     ]
interface wear {
  category: string;
  brand: string;
  price: string;
}

interface SendData {
  public: boolean;
  image: string;
  ble: string;
  user_id: string;
  wears: wear[];
}

export const AddCoordinates = () => {
  const api = axios.create({
    baseURL: "",
    timeout: 10000,
  });

  const [coordinateData, setCoordinateData] = React.useState<SendData>();

  const fetch = React.useMemo(async () => {
    const { data } = await api.post<SendData>("/coordinates");
    console.log(data);
    setCoordinateData(data);
  }, []);

  React.useEffect(() => {
    fetch;
  }, []);

  if (coordinateData !== undefined) {
    return <pre>{JSON.stringify(coordinateData, null, 2)}</pre>;
  }
};

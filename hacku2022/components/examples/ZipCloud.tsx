import axios from "axios";
import React from "react";

export const ZipCloud = () => {
  const api = axios.create({
    baseURL: "https://zipcloud.ibsnet.co.jp/api/",
    timeout: 10000,
  });

  const [zipData, setZipData] = React.useState<ZipCloudResponse>();

  /* 渡されるデータ
  {
	"message": null,
	"results": [
		{
			"address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		}
	],
	"status": 200
} */
  interface ZipCode {
    address1: string;
    address2: string;
    address3: string;
    kana1: string;
    kana2: string;
    kana3: string;
    prefcode: string;
    zipcode: string;
  }

  interface ZipCloudResponse {
    message: string;
    results: ZipCode[];
    status: number;
  }

  const fetch = React.useMemo(async () => {
    const { data } = await api.get<ZipCloudResponse>("/search?zipcode=7830060");
    console.log(data);
    setZipData(data);
  }, []);

  React.useEffect(() => {
    fetch;
  }, []);

  if (zipData !== undefined) {
    return (
      <pre>
        <div>
          <p>
            {zipData.results[0].kana1}&nbsp;
            {zipData.results[0].kana2}&nbsp;
            {zipData.results[0].kana3}
          </p>
          <p>
            {zipData.results[0].address1}&nbsp;
            {zipData.results[0].address2}&nbsp;
            {zipData.results[0].address3}&nbsp;
            {zipData.results[0].prefcode}-{zipData.results[0].zipcode}
          </p>
        </div>
      </pre>
    );
  } else {
    return <></>;
  }
};

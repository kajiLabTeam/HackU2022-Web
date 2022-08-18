import { useState } from "react"; //ファイル状態管理に必要らしい
//import Layout from "../components/Layout";

import DenseAppBar from "../components/DenseAppBar"; //アップバーを作る

export default function UploadImage() {
  const [image, setImage] = useState(null); //送るよう
  const [createObjectURL, setCreateObjectURL] = useState(null); //画面preview用

  const uploadToClient = (event) => {
    //画像が選択されたら実行
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file)); //fileのURLを作成
    }
  };

  //ここでLayoutを呼び出してる
  return (
    <div>
      <DenseAppBar></DenseAppBar>
      <div className="mb-4">this is upload image screen</div>

      <img className="flex justify-center items-center" src={createObjectURL} />

      <label
        htmlFor="file-input"
        className="bg-primary-900 text-white-900 dark:bg-dark-900 flex justify-center items-center px-4 py-2 rounded mb-6 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 hover:cursor-pointer hover:bg-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </label>

      <input
        id="file-input"
        className="hidden"
        type="file"
        accept="image/*"
        name="myImage"
        onChange={uploadToClient}
      />
    </div>
  );
}

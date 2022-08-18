import React from "react";

//フォーム作って更新するコンポーネント
export const InputPractice = () => {
  // ここになにか書こうね
  const [textIn, setText] = React.useState("");
  return (
    <div>
      <div>
        <p>カテゴリー</p>
        <input
          type="text"
          value={textIn}
          onChange={(event) => {
            // これが入力したテキスト情報
            event.target.value;
            setText(event.target.value);
            console.log(textIn);
          }}
        />
      </div>
      <p>{textIn}</p>
    </div>
  );
};

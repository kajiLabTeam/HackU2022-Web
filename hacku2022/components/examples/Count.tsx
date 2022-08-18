import React from "react";

//カウントアップのコンポーネント
export const CountComponent = () => {
  //let countNumber = 0;
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <label
        onClick={() => {
          //countNumber +=1;
          var tmp = count;
          tmp += 1;
          setCount(tmp);
        }}
      >
        カウントアップ
      </label>
    </div>
  );
};

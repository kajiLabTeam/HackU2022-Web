import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { Children } from "react";

import { ZipCloud } from "../components";
import { PlusOneSharp, Tune } from "@material-ui/icons";
import { format } from "node:path/win32";
import { info } from "node:console";
import { MarkUnreadChatAlt } from "@mui/icons-material";

//後から使う値
const text = "なんかテキストっぽいもの";
const flag = true;

//一つ目
interface TestComponentProps {
  before: string;
  after?: string;
  children?: React.ReactNode;
}
const TestComponent = ({ before, after, children }: TestComponentProps) => {
  return (
    <p style={{ fontWeight: "bold", color: "green", fontSize: "48px" }}>
      {before}, おじゃ！ {children}
      {after}
    </p>
  );
};
const data = ["HEY", "YO!", "LFG", "WTF"];

const TestRiyo = () => {
  return (
    <div>
      {data.map((item) => (
        <TestComponent key={item} before={item} />
      ))}
    </div>
  );
};

//カウントアップのコンポーネント
const CountComponent = () => {
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

//フォーム作って更新するコンポーネント
const InputPractice = () => {
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

//{children}を使うコンポーネント
interface HeadingProps {
  fontSize: number;
  children?: React.ReactNode;
}
const Heading = ({ fontSize, children }: HeadingProps) => {
  return (
    <p
      style={{
        fontWeight: "bold",
        fontSize: `${fontSize}px`,
        borderLeft: "solid 8px #0c7abf",
        paddingLeft: "8px",
      }}
    >
      {children}
    </p>
  );
};

//
//
//
//画像アップロード
type DisplayedImage = {
  url: string;
  size: string;
};
const ImageConverter = () => {
  const [displayedImages, setDisplayedImages] = React.useState<
    DisplayedImage[]
  >([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatFileSize = (bytes: number, decimalPoint: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1000;
      const dm = decimalPoint || 2;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    if (event.currentTarget.files != null) {
      const files = event.currentTarget.files;
      setDisplayedImages(
        Array.from(files).map((file) => {
          return {
            url: window.URL.createObjectURL(file),
            size: formatFileSize(file.size, 1),
          };
        })
      );
    }
  };
  return (
    <div className={styles.picture}>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        multiple={true}
        className="hidden"
        id="file-input"
      />
      <label htmlFor="file-input" className={styles.circle}>
        写真選択
      </label>
      <ul className={styles.ul}>
        {displayedImages.map((displayedImage, index) => {
          return (
            <li key={`${index}-li`}>
              <img
                className={styles.img}
                src={displayedImage.url}
                alt=""
                key={`${index}-img`}
              />
              <p className={styles.p}>{displayedImage.size}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//服に関連するところ
type Clothes = {
  url: string;
  size: string;
};

//公開するかどうかのフラグ
//type CanShowFlg = {
//  canShowFlg: boolean;
//};
var canShowFlg = true;
const CanShow = () => {
  //const [canShowFlg, setCanShowFlg] = React.useState();
  //const [canShowFlg, setCanShowFlg] = React.useState<CanShowFlg>();
  const [canShowFlg, setCanShowFlg] = React.useState(false);
  console.log(canShowFlg);
  return (
    <div className={styles.flexBox}>
      <div>公開</div>
      <div
        id="maru"
        className={styles.notSelectRect}
        onClick={() => {
          if (canShowFlg) {
            //何もしない
          } else {
            setCanShowFlg(true);

            document.getElementById("maru").style.backgroundColor = "#aaaaaa";
            document.getElementById("batsu").style.backgroundColor = "#f5f5f5";
          }
        }}
      >
        ○
      </div>
      <div></div>
      <div
        id="batsu"
        className={styles.selectRect}
        onClick={() => {
          if (canShowFlg) {
            setCanShowFlg(false);
            document.getElementById("maru").style.backgroundColor = "#f5f5f5";
            document.getElementById("batsu").style.backgroundColor = "#aaaaaa";
          } else {
            //何もしない
          }
        }}
      >
        x
      </div>
    </div>
  );
};
/*
<div
        onClick={() => {
          console.log(info.length);
          info[info.length] = {
            category: "",
            brand: "",
            prices: "",
          };
          setInfo(info);
          setGomi(gomi + 1);
        }}
      >
*/

let categoryList = [
  "トップス",
  "ボトムス",
  "ベルト",
  "ネックレス",
  "ピアス・イヤリング",
  "ブレスレット・腕時計",
  "カバン",
];

interface Indexes {
  index: number;
}

//🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️ここ質問！！🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️🟨⬛️
//1.eventの補足の仕方について
//2.nullの対処について
//event: {target: { value: React.ChangeEvent<HTMLInputElement> };}
//event: React.ChangeEvent<HTMLInputElement>

const Category = ({ index }: Indexes) => {
  const [category, setCategory] = React.useState("確認用：未設定");
  const categoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("追加するカテゴリを入力してください");
      if (res != "" && res != null) {
        setCategory(res);
        informArray[index].category = res;
        categoryList[categoryList.length] = res;
      }
    } else {
      let res = event.target.value + "";
      setCategory(res);
      informArray[index].category = res;
    }
  };
  return (
    <div>
      {index}
      <p>
        カテゴリ：
        <select name="" id="" onChange={categoryChange}>
          <option value="">--カテゴリを選択してください--</option>
          {categoryList.map((item) => (
            <option value={item}>{item}</option>
          ))}
          <option value="inSelf">自分で追加する</option>
        </select>
      </p>
      {category}
    </div>
  );
};

let brandList = [
  "ユニクロ",
  "GU",
  "BEAMS",
  "Paul Smith",
  "ZARA",
  "RAGEBLUE",
  "GAP",
];
const Brand = ({ index }: Indexes) => {
  const [brand, setBrand] = React.useState("確認用：未設定");
  const brandChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("type Brand");
      if (res != "" && res != null) {
        setBrand(res);
        informArray[index].brand = res;
        brandList[brandList.length] = res;
      }
    } else {
      setBrand(event.target.value);
      let res = event.target.value + "";
      informArray[index].brand = res;
    }
  };
  return (
    <div>
      <p>
        ブランド：
        <select name="" id="" onChange={brandChange}>
          <option value="">--ブランドを選択してください--</option>
          {brandList.map((itemb) => (
            <option value={itemb}>{itemb}</option>
          ))}
          <option value="inSelf">自分で追加する</option>
        </select>
      </p>
      {brand}
    </div>
  );
};

let pricesList = [
  "不明",
  "0~1000円",
  "1000~2000円",
  "2000~3000円",
  "3000~4000円",
  "4000~5000円",
  "5000~7500円",
  "7500~10000円",
  "10000~15000円",
  "15000~20000円",
  "20000円~",
];
const Prices = ({ index }: Indexes) => {
  const [prices, setPrices] = React.useState("確認用：未設定");
  const pricesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value == "inSelf") {
      let res = window.prompt("type Brand");
      if (res != "" && res != null) {
        setPrices(res);
        informArray[index].prices = res;
        pricesList[pricesList.length] = res;
      }
    } else {
      setPrices(event.target.value);
      let res = event.target.value + "";
      informArray[index].prices = res;
    }
  };
  return (
    <div>
      <p>
        価格帯：
        <select name="" id="" onChange={pricesChange}>
          <option value="">--価格帯を選択してください--</option>
          {pricesList.map((itemb) => (
            <option value={itemb}>{itemb}</option>
          ))}
        </select>
      </p>
      {prices}
    </div>
  );
};

interface infoSet {
  category: string; //選ぶ 追加あり
  brand: string; //手入力
  prices: string; //選ぶ 追加なし
}
//interface info {
// infoSets: infoSet[];
//}
//informArray[informArray.length] = { category: "", brand: "", prices: "" };
//

//ちょうどいいし、この中に値を入れるようにしておこう
//後で1,2,3は外しておく
var informArray: infoSet[] = [
  { category: "", brand: "", prices: "" },
  { category: "", brand: "", prices: "" },
  { category: "", brand: "", prices: "" },
];

const OneSet = () => {
  const [info, setInfo] = React.useState(informArray);
  const [gomi, setGomi] = React.useState(3);
  return (
    <div>
      {info.map((item, index) => (
        <div className={styles.box2}>
          <div
            className={styles.box2_title}
            onClick={() => {
              console.log(informArray.map((aaa) => aaa));
              console.log("indeの値は" + index);
              let tmp = info;
              tmp.splice(index, 1);
              setInfo(tmp);
              informArray = tmp;
              setGomi(gomi + 1);
              console.log(informArray.map((aaa) => aaa));
            }}
          >
            {"この項目を削除する"}
          </div>
          <div className={styles.box2_p}>
            <Category index={index} />
            <Brand index={index} />
            <Prices index={index} />
          </div>
        </div>
      ))}
      <div
        onClick={() => {
          console.log(info.length);
          info[info.length] = {
            category: "",
            brand: "",
            prices: "",
          };
          setInfo(info);
          informArray = info;
          setGomi(gomi + 1);
        }}
      >
        +項目を増やす+
      </div>
    </div>
  );
};

//デバッグ用
const InformArrayCheck = () => {
  return (
    <div
      onClick={() => {
        console.log(informArray.map((aaa) => aaa));
      }}
    >
      InuiKoko
    </div>
  );
};

//🟨🟨🟨🟨🟨🟨ここから実際のやってるとこ！！🟨🟨🟨🟨🟨🟨
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>服登録</header>
        <br />
        <br />
        <br />
        <InformArrayCheck />
        <ImageConverter />
        <CanShow />
        <OneSet />

        <div className={styles.box2}>
          <span className={styles.box2_title}>ここにタイトル</span>
          <p className={styles.box2_p}>ここに文章</p>
        </div>
        <p>登録</p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Heading fontSize={40}>見出しになる文章</Heading>
        <TestRiyo />
        <ZipCloud />
        <CountComponent />
        <InputPractice />
        <TestComponent before="なにかいれる" after="アフター">
          aaaa
        </TestComponent>
        <h1>Hello, {flag ? "HEY!" : "YO!"}</h1>
        <h1>Hello, {flag && "LFG"}</h1>
        <h1>Hello, {text}</h1>
        <h1 className={styles.title}>
          ようこそWelcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
/*
ユーザーIDも送る
内部に情報を持っておきたい
ログインの時にグーグルアカウントから情報をあらかじめ取得する
なかった場合には入力の時＼した値を保持しておく

全部一つの構造体に入れる
{
ユーザーid：string
写真：string {  Cloudinary  URL( https://cloudinary.com/ )  }
公開：boolean
カテゴリ等：構造体
}

*/

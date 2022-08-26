import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdXJbLuPNwsBqf92AwD_bFGikXwXmtRjY",
  authDomain: "xclothes-cc8f2.firebaseapp.com",
  projectId: "xclothes-cc8f2",
  storageBucket: "xclothes-cc8f2.appspot.com",
  messagingSenderId: "930686882818",
  appId: "1:930686882818:web:98555c90cdada998b5031b",
  measurementId: "G-W4NT909S8J",
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};

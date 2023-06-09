import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { EMPTY_STRING } from "@/utils/constants";

const inter = Inter({ subsets: ["latin"] });

const ChatPage = () => {
  const [text, setText] = useState<string>(EMPTY_STRING);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("doing stuff");
    console.log(text);
    const obj = {
      chatId: "79263588378@c.us",
      message: text,
    };
    // console.log("obj: ", obj);
    fetch(`https://api.green-api.com/waInstance${process.env.NEXT_PUBLIC_ID_INSTANCE}/sendMessage/${process.env.NEXT_PUBLIC_API_TOKEN_INSTANCE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };
  return (
    <>
      <Head>
        <title>Chats</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <span>hello there</span>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button>send message</button>
        </form>
      </main>
    </>
  );
};

export default ChatPage;

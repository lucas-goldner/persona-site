import Head from "next/head";
import styles from "../styles/Home.module.css";
import PageOne from "../src/PageOne";
import PageTwo from "../src/PageTwo";
import PageThree from "../src/PageThree";
import PageFour from "../src/PageFour";

export default function Home() {
  return (
    <>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </>
  );
}

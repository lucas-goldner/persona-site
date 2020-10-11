import Head from "next/head";
import styles from "../styles/Home.module.css";
import PageOne from "../src/PageOne";
import PageTwo from "../src/PageTwo";
import PageThree from "../src/PageThree";
import PageFour from "../src/PageFour";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Goldner Persona(l) Site for Web- and Mobiledevelopment</title>
        <meta name="author" content="Lucas Goldner" />
        <meta name="keywords" content="Lucas, Goldner, Personal, Site, Developer, Front-End, Mobile" />
        <meta
          name="description"
          content="Persona(l) site of a Web- and Mobile Developer with all of his projects"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favIcon.ico" />
      </Head>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </>
  );
}

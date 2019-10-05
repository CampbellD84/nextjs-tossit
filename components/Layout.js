import Head from "next/head";
import NavBar from "./navbar.js";

const Layout = props => (
  <div>
    <Head>
      <title>Toss It! Project</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;

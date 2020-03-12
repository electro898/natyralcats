import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = ({ children, title = "Home", meta }) => (
  <>
    <Head>
      <title>{`${title} | ${process.env.PROJECT_NAME}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
    </Head>
    <div style={layoutStyle}>
      <Header />
      <h1>Headless Wordpress with Next.js</h1>
      {children}
    </div>
  </>
);

export default Layout;

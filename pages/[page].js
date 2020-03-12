import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Page = props => {
  const { content: page } = props;
  return (
    <Layout title={page.title.rendered}>
      <h2>{page.title.rendered}</h2>
      <p>{page.content.rendered.replace(/<[/]?[pb]>/g, "")}</p>
    </Layout>
  );
};

Page.getInitialProps = async function(context) {
  const { page: slug } = context.query;
  const res = await fetch(
    `https://playground.cms4.nelios.com/wp-json/wp/v2/pages/?slug=${slug}`
  );
  const [page] = await res.json();

  return { content: page };
};

export default Page;

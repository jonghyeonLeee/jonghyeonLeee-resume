import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || jonghyeon Resume}`}
      </title>
    </Head>
  </>
);

export default Seo;

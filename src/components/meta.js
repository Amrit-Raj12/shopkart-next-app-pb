import Head from "next/head";

const Meta = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Ecommerce App"}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default Meta;

import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta charset="utf-8"></meta>
    </Head>
  );
};

export default Meta;

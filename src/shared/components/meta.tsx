import Head from "next/head";
import { FunctionComponent } from "react";

interface MetaProps {
    title: string;
}

const Meta: FunctionComponent<MetaProps> = ({title}) => {
  const fullTitle = 'Testing nextjs architecture | ' + title;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content="An app to test nextjs architecture" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;

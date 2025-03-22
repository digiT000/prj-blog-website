import React from 'react';
import Head from 'next/head';
// UTILS
import { contenfullClient } from '@/utils/contentfull';
import { mappingData } from '@/utils/MappingBlog';
// INTERFACE
import { BlogItemProps } from '@/interface/blogInterface';
// COMPONENT
import Separator from '@/components/Separator';
import HeroSection from '@/components/HeroSection';
import LatestArticle from '@/components/Blog/LatestArticle';
import Layout from '@/components/Layout';

export interface BlogProps {
  blogs: BlogItemProps[];
}

function Home({ blogs }: BlogProps) {
  return (
    <>
      <Head>
        <title>Paulina Personal Blog</title>
      </Head>
      <Layout>
        <Separator />
        <HeroSection />
        <Separator />
        <LatestArticle blogs={blogs} />
      </Layout>
    </>
  );
}

// 1. install axios
// 2. fetch data using axios
// 3. log the result server side props

// This gets called on every request
export async function getServerSideProps() {
  const response = await contenfullClient.getEntries();
  const data = response.items;
  const blogs = mappingData(data, false);

  // Pass data to the page via props
  return { props: { blogs } };
}

export default Home;

//
// content []
// slug
// title
// publishDate

import React from 'react';
import { contenfullClient } from '@/utils/contentfull';
import { mappingData } from '@/utils/MappingBlog';
import HeaderText from '@/components/HeaderText';
import { BlogProps } from '@/pages';
import ListArticle from '@/components/Blog/ListArticle';
import Layout from '@/components/Layout';

function Blog({ blogs }: BlogProps) {
  return (
    <Layout>
      <div className={'flex flex-col gap-2'}>
        <HeaderText tag={'h1'} typeLine={'side'}>
          My Articles
        </HeaderText>
        <p className={'text-preset-7'}>
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </div>
      <ListArticle blogs={blogs} useSummary={true} useSeparator={true} />
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const response = await contenfullClient.getEntries();
  const data = response.items;
  const blogs = mappingData(data, true);

  // Pass data to the page via props
  return { props: { blogs } };
}

export default Blog;

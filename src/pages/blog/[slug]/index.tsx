import React from 'react';
import { contenfullClient } from '@/utils/contentfull';
// INTERFACE
import { BlogItemProps } from '@/interface/blogInterface';
// UTILS
import { mappingData } from '@/utils/MappingBlog';
import { formatDate } from '@/utils/FormatDate';
// COMPONENT
import BlogNotFound from '@/components/Blog/BlogNotFound';
import Layout from '@/components/Layout';
import RenderArticle from '@/components/Blog/RenderArticle';

export interface BlogDetailProps {
  blog: BlogItemProps;
}

function BlogDetail({ blog }: BlogDetailProps) {
  console.log('blog', blog);
  if (!blog) return <BlogNotFound />;

  const formatedDate = formatDate(blog.publishDate);
  return (
    <Layout>
      <article>
        {/*TITLE*/}
        <h1 className={'text-preset-1 text-neutral-700'}>{blog.title}</h1>
        <p className={'text-preset-8 italic text-neutral-600'}>
          Published {formatedDate}
        </p>
      </article>
      <RenderArticle content={blog.blogContent} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const response = await contenfullClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  const data = response.items;
  const blog = mappingData(data, true, true)[0];

  return {
    props: {
      blog,
    },
  };
}
export default BlogDetail;

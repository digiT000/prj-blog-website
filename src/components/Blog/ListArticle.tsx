import React from 'react';
import { BlogItemProps } from '@/interface/blogInterface';
import BlogItem from '@/components/Blog/BlogItem';
import Separator from '@/components/Separator';

interface listProps {
  blogs: BlogItemProps[];
  useSeparator?: boolean;
  useSummary?: boolean;
}

function ListArticle({
  blogs,
  useSummary = false,
  useSeparator = false,
}: listProps) {
  return (
    <div className={'grid grid-cols-1 gap-5'}>
      {blogs.map((blog: BlogItemProps) => (
        <>
          {useSeparator && <Separator key={blog.slug} />}
          <BlogItem key={blog.slug} blog={blog} useSummary={useSummary} />
        </>
      ))}
    </div>
  );
}

export default ListArticle;

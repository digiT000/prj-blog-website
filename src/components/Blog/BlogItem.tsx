import React from 'react';
import { BlogItemProps } from '@/interface/blogInterface';
import Link from 'next/link';
import { formatDate } from '@/utils/FormatDate';

interface BlogItem {
  blog: BlogItemProps;
  useSummary: boolean;
}

function BlogItem({ blog, useSummary }: BlogItem) {
  const formatedDate = formatDate(blog.publishDate);
  return (
    <Link className={'group flex flex-col gap-2'} href={`/blog/${blog.slug}`}>
      <h3
        className={
          'text-neutral-700 text-preset-5 group-hover:underline group-hover:opacity-70'
        }
      >
        {blog.title}
      </h3>
      <p className={'text-preset-8 italic text-neutral-600'}>{formatedDate}</p>
      {useSummary && (
        <p className={'text-preset-7 text-neutral-600'}>{blog.summary}</p>
      )}
    </Link>
  );
}

export default BlogItem;

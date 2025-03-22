import React from 'react';
import ListArticle from '@/components/Blog/ListArticle';
import { BlogItemProps } from '@/interface/blogInterface';
import HeaderText from '@/components/HeaderText';

interface LatestArticleProps {
  blogs: BlogItemProps[];
}

function LatestArticle({ blogs }: LatestArticleProps) {
  return (
    <div className={'grid grid-cols-1 gap-8'}>
      <HeaderText tag={'h2'} typeLine={'side'}>
        Latest Article
      </HeaderText>
      <ListArticle blogs={blogs} />
    </div>
  );
}

export default LatestArticle;

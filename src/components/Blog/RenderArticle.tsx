import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RICHTEXT_OPTION } from '@/components/Blog/RichTextOption';

interface RenderArticleProps {
  content: Document;
}

function RenderArticle({ content }: RenderArticleProps) {
  return (
    <article>{documentToReactComponents(content, RICHTEXT_OPTION)}</article>
  );
}

export default RenderArticle;

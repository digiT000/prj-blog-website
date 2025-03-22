import { Document } from '@contentful/rich-text-types';

export interface BlogItemProps {
  title: string;
  slug: string;
  publishDate: string;
  summary: string | null;
  blogContent: Document;
}

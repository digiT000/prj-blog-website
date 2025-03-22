import { BLOCKS, Document } from '@contentful/rich-text-types';
import style from '../Blog/RenderArticle.module.css';

export const RICHTEXT_OPTION = {
  renderNode: {
    // HEADING
    [BLOCKS.HEADING_1]: (node: Document, children: React.ReactNode) => {
      return <h1 className={style.heading_1}>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node: Document, children: React.ReactNode) => {
      return <h2 className={style.heading_2}>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: Document, children: React.ReactNode) => {
      return <h3 className={style.heading_3}>{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node: Document, children: React.ReactNode) => {
      return <h4 className={style.heading_4}>{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node: Document, children: React.ReactNode) => {
      return <h5 className={style.heading_5}>{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node: Document, children: React.ReactNode) => {
      return <h6 className={style.heading_6}>{children}</h6>;
    },
    // BLOCK QUOTE
    [BLOCKS.QUOTE]: (node: Document, children: React.ReactNode) => {
      return (
        <blockquote
          className={`${style.blockquoteStyle} text-preset-7 text-neutral-700`}
        >
          {children}
        </blockquote>
      );
    },
    // LIST
    [BLOCKS.OL_LIST]: (node: Document, children: React.ReactNode) => {
      return (
        <ol className={`${style.listItemStyle} list-decimal`}>{children}</ol>
      );
    },
    [BLOCKS.UL_LIST]: (node: Document, children: React.ReactNode) => {
      return <ul className={`${style.listItemStyle} list-disc`}>{children}</ul>;
    },
    // PARAGRAPH
    [BLOCKS.PARAGRAPH]: (node: Document, children: React.ReactNode) => {
      return (
        <p className={'text-preset-7 text-neutral-600 mb-4 inline-block'}>
          {children}
        </p>
      );
    },
    // HORIZONTAL LINE
    [BLOCKS.HR]: (node: Document, children: React.ReactNode) => {
      return (
        <div className={'my-4 w-full h-[2px] bg-neutral-200 inline-block'}>
          {children}
        </div>
      );
    },
  },
};

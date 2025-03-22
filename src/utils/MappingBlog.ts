import { Entry, EntrySkeletonType } from 'contentful';

export function mappingData(
  data: Entry<EntrySkeletonType, undefined, string>[],
  incSummary: boolean = false,
  incContent: boolean = false
) {
  const items = data.map((item) => {
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      publishDate: item.sys.createdAt,
      summary: incSummary ? item.fields.summary : null,
      blogContent: incContent ? item.fields.blogContent : null,
    };
  });
  return items;
}

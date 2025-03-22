import * as contentful from 'contentful';

export const contenfullClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CMS_SPACE_ID as string,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CMS_API_KEY as string,
});

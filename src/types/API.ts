type CreateQuerySubmissionInput = {
  name: string;
  email: string;
  message: string;
};

type Blog = {
    __typename: string;
  id: string;
  title: string;
  summary?: string | null;
  tags: string[];
  body?: string | null;
  readingTime?: string | null;
  slug?: string | null;
  path?: string | null;
  filePath?: {
    __typename: string;
    url: string;
    expiryTime?: string | null;
  } | null;
  created: string;
  lastmod?: string | null;
};

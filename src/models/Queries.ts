import { gql } from "@apollo/client";

export const getBlogsListQuery = /* GraphQL */ gql`
    query GetBlogsList {
        blogs {
            created
            filePath {
                expiryTime
                url
            }
            id
            lastmod
            path
            readingTime
            slug
            summary
            tags
            title
        }
    }
`;

export const getBlogQuery = /* GraphQL */ gql`
    query GetBlogsList($id: ID!) {
        blog(id: $id) {
            created
            filePath {
                expiryTime
                url
            }
            id
            lastmod
            path
            readingTime
            slug
            summary
            body
            tags
            title
        }
    }
`;
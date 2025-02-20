import { gql } from "@apollo/client";

export const createQuerySubmissionMutation = /* GraphQL */ gql`
  mutation CreateQuerySubmission(
    $name: String!
    $email: String!
    $message: String!
  ) {
    createQuerySubmission(email: $email, message: $message, name: $name) {
      email
      id
      message
      name
    }
  }
`;

import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "./userFullNameFragment";
import { SIZES_FRAGMENT } from "./sizesFragment";

export const NEWS_FRAGMENT = gql`
  fragment News on NewsNode {
    title
    cover {
      ...Sizes
    }
    date
    author {
      user {
        ...NameParts
      }
    }
    content
  }
  ${SIZES_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
`;

export const SOCIETY_NEWS_FRAGMENT = gql`
  fragment NewsFields on SocietyNode {
    newsSet {
      edges {
        node {
          ...News
        }
      }
    }
  }
  ${FULL_NAME_FRAGMENT}
  ${NEWS_FRAGMENT}
`;

export const COMMITTEE_NEWS_FRAGMENT = gql`
  fragment CNewsFields on CommitteeNode {
    newsSet {
      edges {
        node {
          ...News
        }
      }
    }
  }
  ${FULL_NAME_FRAGMENT}
  ${NEWS_FRAGMENT}
`;
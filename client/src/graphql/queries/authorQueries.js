import gql from "graphql-tag";

export const GET_LIST_OF_AUTHORS = gql`
    query {
        authors {
            id
            name
        }
    }
`;

export const GET_AUTHOR_DETAILS = gql`
    query Book($id: ID!) {
        book (id: $id) {
            name
            age
            books {
                name
                genre
            }
        }
    }
`;
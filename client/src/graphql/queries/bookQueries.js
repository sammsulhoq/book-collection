import gql from "graphql-tag";

export const GET_LIST_OF_BOOKS = gql`
    query {
        books {
            id
            name
        }
    }
`;

export const GET_BOOK_DETAILS = gql`
    query Book($id: ID!) {
        book (id: $id) {
            name
            genre
            author {
                name
                age
                books {
                    name
                    genre
                }
            }
        }
    }
`;
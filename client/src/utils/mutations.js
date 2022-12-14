import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        email
        username
        _id
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($authors: [String]!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
    addBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      _id
      username
      savedBooks {
        bookId
      author
      description
      title
      image
      link
      __id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($author: [String]!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
  saveBook(author: $author, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
    _id
    username
    savedBooks {
      bookId
      author
      description
      title
      image
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            bookId
            author
            description
            title
            image
            link
      }
    }
  }
`;
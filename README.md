# Book Collection
Book Collection is a sample application which demonstrates the use of **GraphQL** in the backend and **Vue Apollo** on the frontend.

***

### Tech Stack

Book Collection uses a number of open source projects to work properly:

##### Client side
* [VueJS]
* [Vue Apollo]

##### Server side
* [NodeJS]
* [Mongoose]
* [MongoDB]
* [GraphQL]
* [Express]
* [Express GraphQL]

Alternatively we can signup and use [mLab] rather than installing MongoDB.

***

### Installation
##### Server side
Clone the repo and change the directory to `server`. Run the `npm intall` or `npm i` to install the dependencies.
```
$ cd server
$ npm install
```
Run the application, using the following command.
```
$ node index.js
```
Visit the [MongoDB] website to download and install it. On the same website we can find, **Compass** which is used to manage the mongodb instance.

**Note:** There are two json files in `server/data` folder which we can restore into the database.

##### Client side
Use the following set of commands to install the frontend dependencies.
```
$ cd client
$ npm install
```
Run `npm run serve` to start the development server and visit the localhost website.
```
$ npm run serve
```
***

### GraphQL
##### Queries:
List all the books:
```
query {
    books {
        name
        genre
        author {
            name
            age
        }
    }
}
```
List all the authors:
```
query {
    authors {
        name
        age
        books {
            name
            genre
        }
    }
}
```
Get details for a specific book identified by `id` parameter:
```
query {
    book(id: ID!) {
        name
        genre
        author {
            name
            age
        }
    }
}
```
##### Mutations:
Add a new book:
```
mutation {
    addBook(name: String!, genre: String!, authorId: ID!) {
        name
        genre
    }
}
```
Add a new author:
```
mutation {
   addAuthor(name: String!, age: Int!) {
        name
        age
   }
}
```
***

[//]: #
   [VueJS]: <https://vuejs.org/>
   [Vue Apollo]: <https://vue-apollo.netlify.com/>
   [NodeJS]: <https://nodejs.org/en/>
   [Mongoose]: <https://mongoosejs.com/>
   [MongoDB]: <https://www.mongodb.com/>
   [GraphQL]: <https://graphql.org/>
   [Express]: <https://expressjs.com/>
   [Express GraphQL]: <https://graphql.org/graphql-js/express-graphql/>
   [mLab]: <https://mlab.com/>
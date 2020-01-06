<template>
    <div v-if="bookDet !== null && Object.keys(bookDet).length > 0">
        <h4>Book Details</h4>
        <h6 v-if="bookDet.name">{{ bookDet.name }}(<i>{{ bookDet.genre }}</i>)</h6>
        Author: <b>{{ bookDet.author.name }}</b>, {{ bookDet.author.age}} years old<br/>
        Other books by this author:<br/>
        <table align="center">
            <tbody>
                <tr v-for="authorBooks in bookDet.author.books" :key=authorBooks.name>
                    <td><i>{{ authorBooks.name }}</i></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { GET_BOOK_DETAILS } from "../graphql/queries/bookQueries";

export default {
    props: {
        bookDet: {
            type: Object,
            default: {
                name: "",
                genre: ""
            }
        }
    }
}
</script>
<template>
    <div>
        <table align="center">
            <tbody>
                <tr>
                    <td>Book Title: </td><td><input type="text" v-model="name" /></td>
                </tr>
                <tr>
                    <td>Book Genre: </td><td><input type="text" v-model="genre" /></td>
                </tr>
                <tr>
                    <td>Book Genre: </td>
                    <td>
                        <select name="" v-model="authorId" id="">
                            <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.name }}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="button" @click="addBook">Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>   
    </div>
</template>

<script>
import { GET_LIST_OF_AUTHORS } from "../graphql/queries/authorQueries";
import { ADD_BOOK } from "../graphql/mutations/addBook";

export default {
  data () {
    return {
        authors: [],
        name: "",
        genre: "",
        authorId: ""
    }
  },
  async mounted() {
    const response = await this.$apollo.query({ query: GET_LIST_OF_AUTHORS });
    this.authors = response.data.authors;
  },
  methods: {
    async addBook() {
        const response = await this.$apollo.mutate({ mutation: ADD_BOOK, variables: { name: this.name, genre: this.genre, authorId: this.authorId }});
        this.name = "";
        this.genre = "";
        this.authorId = "";
        window.location.reload();
    }
  }
}
</script>
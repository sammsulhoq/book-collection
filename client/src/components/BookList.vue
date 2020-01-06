<template>
    <ul v-if="books.length > 0">
      <li v-for="book in books" :key="book.id" @click="showBookDetails(book.id)">{{ book.name }}</li>
    </ul>
</template>

<script>
import { GET_LIST_OF_BOOKS, GET_BOOK_DETAILS } from "../graphql/queries/bookQueries";

export default {
  data () {
        return {
            books: []
        }
  },
  async mounted() {
    const response = await this.$apollo.query({ query: GET_LIST_OF_BOOKS });
    this.books = response.data.books;
  },
  methods: {
    async showBookDetails(id) {
        const response = await this.$apollo.query({ query: GET_BOOK_DETAILS, variables: { id }});
        this.$emit("displayBookDetails", response.data.book);
    }
  }
}
</script>

<style scoped>
ul li {
    cursor: pointer;
}
</style>
<template>
  <div>
    <h1>Book List</h1>
    <BookList @displayBookDetails="bookDetails" />
    <BookDetails :bookDet="selectedBookDetails"/>
    <div class="footer">
      <AddBook  />
    </div>
  </div>
</template>

<script>
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import AddBook from "./AddBook";

export default {
  components: { BookList, BookDetails, AddBook },
  data() {
    return {
      selectedBookDetails: null
    }
  },
  methods: {
    bookDetails(value) {
      this.selectedBookDetails = value;
    }
  }
}
</script>

<style scoped>
  h3 {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 40%;
  }
</style>

<template>
  <b-row class="mt-5">
    <b-col
        lg="12"
        class="mb-4"
    >
      <div class="todo-block" v-if="getSingleTodo">
        <h2 class="text-center mb-4" >{{ getSingleTodo.title }}</h2>
        <p>{{ getSingleTodo.body }}</p>

        <div class="d-flex btn-blocks mt-4">
          <div>
            <button class="btn">Edit</button>
            <button class="btn">Delete</button>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Single",

  methods: {
    fetchSingleToDo (id) {
      this.$store.dispatch('fetchOneTodo', id)
    }
  },
  computed: {
    getSingleTodo() {
     return this.$store.getters.getSingleTodo
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchSingleToDo(id)
  },
}
</script>

<style scoped>

</style>

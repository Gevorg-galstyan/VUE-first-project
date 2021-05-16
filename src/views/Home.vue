<template>
  <b-row class="mt-5">
    <b-col
        lg="4"
        class=  "mb-4"
        v-for="todo in getAllTodos"
        :key="todo.id"
    >
      <div class="todo-block">
        <h2 class="text-center mb-4">{{ makeShortText(todo.title, 15) }}</h2>
        <p>{{ makeShortText(todo.body, 80) }}</p>
        <div class="d-flex btn-blocks mt-4 align-items-center justify-content-between">
          <div>
            <b-button
                v-b-modal.modal-center
                class="mx-2"
                @click="getId(todo.id)"
            >Edit</b-button>
            <button class="btn btn-danger">Delete</button>
          </div>
          <router-link :to="{path:`/todo/${todo.id}`, id:todo.id}">See More</router-link>
        </div>
      </div>
    </b-col>
    <AddOrEdit
        v-if="this.$store.state.todoModule.todoId"
        :toDoId="this.$store.state.todoModule.todoId"
    />
  </b-row>

</template>

<script>
import AddOrEdit from "@/components/Modals/AddOrEdit";
import { mapGetters} from 'vuex'

export default {
  name: 'Home',
  mounted() {
    this.fetchTodos(5);
  },
  methods: {
    fetchTodos(num) {
      this.$store.dispatch('fetchTodos', num)
    },
    makeShortText(str = '', length) {
      if (!length || str.length < length) {
        return str
      }
      return str.slice(0, length) + '...'
    },
    getId(id){
      this.$store.commit('changeToDoId', id)
    }
  },
  computed: {
    ...mapGetters(['getAllTodos']),
  },
  components: {
    AddOrEdit
  }

}
</script>

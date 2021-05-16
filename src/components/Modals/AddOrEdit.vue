<template>
  <b-modal id="modal-center" centered title="BootstrapVue" hide-footer >
    <b-form>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="todo.title"
            placeholder="Enter Title"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="" label-for="textarea">
        <b-form-textarea
            id="textarea"
            v-model="todo.body"
            placeholder="Enter Description"
            rows="10"
            required
        ></b-form-textarea>
      </b-form-group>
    </b-form>
    <div class="modal-footer">
      <b-button class="mt-3" block @click="$bvModal.hide('modal-center')">Cancel</b-button>
      <b-button class="mt-3" block variant="primary" @click="edit()">Edit</b-button>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: "AddOrEdit",
  props: ['toDoId'],
  data() {
    return {
      todo: {...this.$store.getters.getToDoById},
    }
  },

  methods: {
    edit(){
      this.$store.commit('editToDo', this.todo);
      this.todo = this.$store.getters.getToDoById;
    }
  },

  watch: {
    toDoId: function (id, oldId) {
      this.todo = {...this.$store.getters.getToDoById}
    }
  },

}
</script>

<style scoped>

</style>

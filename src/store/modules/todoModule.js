export default {
    actions: {
        async fetchTodos({commit}, limit = 10) {
            const todosFromUrl = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            const todos = await todosFromUrl.json();
            commit('loadTodos', todos)
        },
        async fetchOneTodo({commit}, id) {
            const todoFromUrl = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const todo = await todoFromUrl.json();
            commit('loadSingleTodos', todo)
        },
    },

    state: {
        todos: [],
        todo: null,
        todoId: ''
    },

    mutations: {
        loadTodos(state, todos) {
            state.todos = todos
        },
        loadSingleTodos(state, todo) {
            state.todo = todo
        },
        changeToDoId(state, id) {
            state.todoId = id
        },
        editToDo(state, editedTodo){
            const idx = state.todos.findIndex(e => e.id ===  editedTodo.id);
            state.todos[idx] = editedTodo;
        },
        deleteToDo(state, id){
            state.todos = state.todos.filter(e => e.id !== id)
        }

    },

    getters: {
        getAllTodos(state) {
            return state.todos
        },
        getSingleTodo(state) {
            return state.todo
        },
        getToDoById(state){
            return state.todos.filter(e => e.id === state.todoId)[0]
        }

    }
}

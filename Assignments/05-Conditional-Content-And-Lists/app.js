Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            listShown: true,    
        };
    },
    computed: {
        listAction() {
            return this.listShown ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toggleList() {
            this.listShown = !this.listShown;
        }
    }
}).mount('#assignment');

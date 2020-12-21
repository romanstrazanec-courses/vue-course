Vue.createApp({
    data() {
        return {
            classes: '',
            hidden: false,
            background: '',
        };
    },
    computed: {
        user1() {
            return this.classes.includes('user1');
        },
        user2() {
            return this.classes.includes('user2');
        },
        visible() {
            return !this.hidden;
        }
    },
    methods: {
        toggleHidden() {
            this.hidden = !this.hidden;
        }
    }
}).mount('#assignment');

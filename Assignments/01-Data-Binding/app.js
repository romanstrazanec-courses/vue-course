Vue.createApp({
    data() {
        return {
            name: 'Roman',
            age: 23,
            imageUrl: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'
        };
    },
    methods: {
        ageIn5Years() {
            return this.age + 5;
        },
        favoriteNumber() {
            return Math.random();
        }
    }
}).mount('#assignment');

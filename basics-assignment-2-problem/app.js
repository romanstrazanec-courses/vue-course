Vue.createApp({
    data() {
        return {
            output: '',
            output2: '',
            finalOutput: '',
        };
    },
    methods: {
        showAlert() {
            alert('Watch out!');
        },
        changeOutput(event) {
            this.output = event.target.value;
        },
        changeOutput2(event) {
            this.output2 = event.target.value;
        },
        changeFinalOutput() {
            this.finalOutput = this.output2;
        }
    }
}).mount('#assignment');

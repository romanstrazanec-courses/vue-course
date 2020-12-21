Vue.createApp({
    data() {
        return {
            result: 0,
            triggered: false,
        };
    },
    watch: {
        result(val) {
            this.result = val;
            if (!this.triggered) {
                setTimeout(() => {
                    this.result = 0;
                    this.triggered = false;
                }, 5000);
                this.triggered = true;
            }
        }
    },
    computed: {
        computedResult() {
            if (this.result < 37) {
                return 'Not there yet';
            } else if (this.result == 37) {
                return this.result;
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(val) {
            this.result += val;
        }
    }
}).mount('#assignment');
const app = Vue.createApp({
    data() {
        return {
            number: 1,
            direction: 'Right',
        };
    },
    methods: {
        showPage(number) {
            if (number == this.number) {
                return;
            }
            if (number > this.number) {
                this.direction = 'Right';
            } else {
                this.direction = 'Left';
            }
            this.number = number;
        },
    },
});

app.mount('#app');

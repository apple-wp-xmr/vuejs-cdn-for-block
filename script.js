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
                direction = 'Right';
            } else {
                direction = 'Left';
            }
            this.number = number;
            console.log(number, direction);
        },
    },
});

app.mount('#app');

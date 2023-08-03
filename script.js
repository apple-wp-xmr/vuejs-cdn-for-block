const app = Vue.createApp({
    data() {
        return {
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            number: 1,
        };
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            this.picture = results[0].picture.large;
        },
        showHello(number) {
            this.number = number;
        },
    },
});

app.mount('#app');

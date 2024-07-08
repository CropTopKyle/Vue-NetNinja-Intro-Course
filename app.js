const app = Vue.createApp({
	// Data and functions
	data() {
		return {
			showBooks: true,
			title: 'The Pragmatic Programmer: From Journeyman to Master',
			author: 'Andy Hunt',
			age: '59',
		};
	},
	methods: {
		changeBook(title) {
			this.title = title;
			this.author = 'Robert Cecil Martin';
			this.age = '72';
		},

		showBooks() {},
	},
});

app.mount('#app');

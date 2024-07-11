const app = Vue.createApp({
	// Data and functions
	data() {
		return {
			url: 'https://www.google.com',
			showBooks: true,
			showAuthor: true,
			books: [
				{
					title: 'Clean Code',
					author: 'Robert C. Martin',
					isFav: true,
					cover: 'public/cleancode.jpg',
					alt: 'book cover',
				},
				{
					title: 'The Mythical Man-Month',
					author: 'Frederick Brooks',
					isFav: false,
					cover: 'public/mythicalmanmonth.jpg',
					alt: 'book cover',
				},
				{
					title: 'The Pragmatic Programmer: Your Journey to Mastery',
					author: 'Andrew Hunt and David Thomas',
					isFav: true,
					cover: 'public/pragmaticprogrammer.jpg',
					alt: 'book cover',
				},
				{
					title: 'The Art of Computer Programming',
					author: 'Donald Knuth',
					isFav: false,
					cover: 'public/artofcomputerprogramming.jpg',
					alt: 'book cover',
				},
			],
			x: 0,
			y: 0,
		};
	},
	methods: {
		changeBook(title) {
			this.title = title;
			this.author = 'Robert Cecil Martin';
			this.age = '72';
		},

		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},

		toggleFavorite(book) {
			book.isFav = !book.isFav;
		},

		handleHover(e, data) {
			console.log('Hovering!');
			console.log(e);
			console.log(`Data: ${data}`);
		},
		handleLeave(e) {
			console.log('Leaving!');
			console.log(e);
		},
		handleDoubleclick(e) {
			console.log('Twice Clicked!');
			console.log(e, e.type);
		},
		handleMouseMove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
	},

	computed: {
		filteredFavBooks() {
			return this.books.filter((book) => book.isFav);
		},

		filteredBooks() {
			return this.books.filter((book) => !book.isFav);
		},
	},
});

app.mount('#app');

let posts = require('./posts.json');

const findAll = () => {
	return new Promise((resolve, reject) => {
		resolve(posts);
	});
};

const findById = (id) => {
	return new Promise((resolve, reject) => {
		const post = posts.find((post) => post.id === id);
		if (post) {
			resolve(post);
		}
		else {
			reject(`Post with id ${id} not found !`);
		}
	});
};

const deleteById = (id) => {
	return new Promise((resolve, reject) => {
		const newPosts = posts.filter((post) => post.id !== id);
		posts = [
			...newPosts
		];
		resolve({ message: 'Post deleted successfully!!' });
	});
};

const create = (post) => {
	return new Promise((resolve, reject) => {
		const newPost = {
			id : Date.now().toString(),
			...post
		};
		todos = [
			newPost,
			...posts
		];
		resolve(newPost);
	});
};

const updateById = async (id, body) => {
	try {
		const { title, description } = body;
		const post = await findById(id);
		if (!post) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Post not found!' }));
		}
		return new Promise((resolve, reject) => {
			const updatedPost = {
				id,
				title       :
					title ? title :
					todo.title,
				description :
					description ? description :
					todo.description
			};
			const index = posts.findIndex((post) => post.id === id);
			posts[index] = updatedPost;
			resolve(updatedPost);
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	findAll,
	findById,
	deleteById,
	create,
	updateById
};
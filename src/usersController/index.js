let users = require('./users.json');

const findAll = () => {
	return new Promise((resolve, reject) => {
		resolve(users);
	});
};

const findById = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);
		if (user) {
			resolve(user);
		}
		else {
			reject(`User with id ${id} not found !`);
		}
	});
};

const deleteById = (id) => {
	return new Promise((resolve, reject) => {
		const newUsers = users.filter((user) => user.id !== id);
		users = [
			...newUsers
		];
		resolve({ message: 'User deleted successfully!!' });
	});
};

const create = (user) => {
	return new Promise((resolve, reject) => {
		const newUser = {
			id : Date.now().toString(),
			...user
		};
		todos = [
			newUser,
			...users
		];
		resolve(newUser);
	});
};

const updateById = async (id, body) => {
	try {
		const { title, description } = body;
		const user = await findById(id);
		if (!user) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'User not found!' }));
		}
		return new Promise((resolve, reject) => {
			const updatedUser = {
				id,
				title       :
					title ? title :
					todo.title,
				description :
					description ? description :
					todo.description
			};
			const index = users.findIndex((user) => user.id === id);
			users[index] = updatedUser;
			resolve(updatedUser);
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
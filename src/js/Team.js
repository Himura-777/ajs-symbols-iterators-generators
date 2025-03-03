export default class Team {
	constructor() {
		this.members = new Set();
	}

	add(character) {
		this.members.add(character);
	}

	//Задание 1
	// [Symbol.iterator]() {
	// 	const membersArray = Array.from(this.members);
	// 	let index = 0;

	// 	return {
	// 		next() {
	// 			if (index < membersArray.length) {
	// 				return { value: membersArray[index++], done: false };
	// 			}
	// 			return { done: true };
	// 		},
	// 	};
	// }

	//Задание 2
	*[Symbol.iterator]() {
		for (const member of this.members) {
			yield member;
		}
	}
}

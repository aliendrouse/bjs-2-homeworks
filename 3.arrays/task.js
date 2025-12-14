function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length === 0) {
		return 0;
	}
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}
	const averageAge = users
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((sum, age, index, array) => {
			sum += age;
			if (index === array.length - 1) {
				return sum / array.length;
			}
			return sum;
		}, 0);
	return averageAge;
}
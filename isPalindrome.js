
// LeetCode link: https://leetcode.com/problems/valid-palindrome/submissions/1077197547/

/*

// version 1
// October 16, 2023
// 110ms, bottom 5% time, bottom 5% memory in LeetCode

function isPalindrome(s) {
	let tempList = [];
	for (let i = 0; i < s.length; i++) {
		if (/^[a-zA-Z0-9]+$/.test(s[i])) {
			tempList.push(s[i].toLowerCase());
		}
	}
	console.log(tempList)
	let result = true;
	for (let i = 0; i < tempList.length; i++) {
		if (tempList[i] != tempList[tempList.length - i - 1]) {
			result = false;
		}
	}
	return result;
}

*/

/*

// version 2
// October 16, 2023
// 111ms, bottom 5% time, bottom 5% memory in LeetCode

var isPalindrome = function(s) {
	if (s == "") {
		return true;
	}

	let parsedList = s.split("");
	let filteredList = parsedList.filter(function (letter) {
		return /^[a-zA-Z0-9]+$/.test(letter);
	});
	let finalList = filteredList.map(filteredList => filteredList.toLowerCase());
	console.log(finalList)
	let result = true;
	for (let i = 0; i < Math.floor(finalList.length / 2); i++) {
		if (finalList[i] != finalList[finalList.length - i - 1]) {
			result = false;
		}
	}
	return result;
};

*/

// version 3
// October 16, 2023
// 53ms, top 7% time, bottom 7% memory in LeetCode

function isPalindrome(s) {
	if (s == "") {
		return true;
	}
	const parsedList = s.split("");
	const filteredList = parsedList.filter(function (letter) {
    	return /^[a-zA-Z0-9]+$/.test(letter);
	});
	const finalList = filteredList.map(filteredList => filteredList.toLowerCase());
	let list2 = [...finalList].reverse();
	return (JSON.stringify(finalList) == JSON.stringify(list2))
}


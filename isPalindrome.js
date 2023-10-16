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
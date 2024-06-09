function stringTransform(str) {
    const length = str.length;
    let result = '';

    if (length % 15 === 0) {
        result = str.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        result = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        result = str;
    }

    return result;
}

console.log(stringTransform('Hamburgerwertyq'));
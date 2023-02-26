exports.expand = (rowCount, columnCount, startAt = 1) => {
    let index = startAt;
    return Array(rowCount)
        .fill(0)
        .map(
            (v) =>
                `(${Array(columnCount)
                    .fill(0)
                    .map((v) => `$${index++}`)
                    .join(', ')})`
        )
        .join(', ');
}

// flatten([[1, 2], [3, 4]]) returns [1, 2, 3, 4]
exports.flatten = (arr) => {
    let newArr = [];
    arr.forEach((v) => v.forEach((p) => newArr.push(p)));
    return newArr;
};
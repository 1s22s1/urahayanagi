function union(arr1, arr2) {
    const arr = [...arr1, ...arr2];

    return [...new Set(arr)].sort((m, n) => m - n);
}

module.exports = union
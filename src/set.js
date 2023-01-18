exports.union = (arr1, arr2) => {
  const arr = [...arr1, ...arr2]

  return [...new Set(arr)].sort((m, n) => m - n)
}

exports.intersection = (arr1, arr2) => {
  const arr = arr1.filter(e => arr2.includes(e))

  return [...new Set(arr)].sort((m, n) => m - n)
}

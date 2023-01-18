exports.union = (arr1, arr2) => {
  const arr = [...arr1, ...arr2]

  return [...new Set(arr)].sort((m, n) => m - n)
}

exports.intersection = (arr1, arr2) => {
  const arr = arr1.filter(e => arr2.includes(e))

  return [...new Set(arr)].sort((m, n) => m - n)
}

exports.difference = (arr1, arr2) => {
  const arr = arr1.filter(e => !arr2.includes(e))

  return [...new Set(arr)].sort((m, n) => m - n)
}

exports.symmetric_difference = (arr1, arr2) => {
  const difference1 = this.difference(arr1, arr2)
  const difference2 = this.difference(arr2, arr1)

  return this.union(difference1, difference2)
}

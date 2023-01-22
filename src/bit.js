exports.isOn = (num, bitNum) => {
  return !!(num & (1 << bitNum))
}

exports.isOff = (num, bitNum) => {
  return !this.isOn(num, bitNum)
}

exports.on = (num, bitNum) => {
  return num | (1 << bitNum)
}

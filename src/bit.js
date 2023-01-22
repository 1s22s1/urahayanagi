exports.isOn = (num, bitNum) => {
  return !!(num & (1 << bitNum))
}

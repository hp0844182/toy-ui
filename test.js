var it = true
var i = 0
while (it) {
  if (i === 5) {
    continue
  }
  console.log(i)
  i++
  if (i === 10) {
    it = false
  }
}

function isNice(arr){
console.log(arr)
  let nice = false
  for(i in arr) {
  if (arr.includes(arr[i]+1)|arr.includes(arr[i]-1)) {
  nice = true
  } else {
  return false
  }
  }
  return nice
}
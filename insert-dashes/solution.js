function insertDash(num) {
var newNum = num.toString().split('')
for(var i = 0; i<newNum.length; i++) {
if(newNum[i]%2 === 1) {
if(newNum[i+1]%2 === 1) {
newNum.splice(i+1, 0, '-')
}
}
}
var endNum = newNum.join().toString().replace(/,/g,'')
return endNum
}
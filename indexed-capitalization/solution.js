function capitalize(s,arr){
s = s.split('')
let ans = []
arr.forEach(e => {
if(e < s.length) {
s[e] = s[e].toUpperCase()
}
})
return s.join('')
};
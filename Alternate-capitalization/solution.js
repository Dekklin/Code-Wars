function capitalize(s){
  let even = '';
  let odd = '';
  for(i in s){
    if(i%2 == 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      odd += s[i].toUpperCase();
      even += s[i];
    }
  }
  return [even, odd];
}
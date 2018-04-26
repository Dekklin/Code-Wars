function mutateMyStrings(stringOne, stringTwo){
  var arr = [];
  for (i in stringTwo){
    console.log(stringOne.charAt(i));
    if(stringOne.charAt(i) !== stringTwo.charAt(i)){
      arr.push(`${stringOne}\n`);
      stringOne = stringOne.split('');
      stringOne[i] = stringTwo[i];
      stringOne = stringOne.join('');
    }
  }
  arr.push(`${stringOne}\n`);
  return arr.join('');
}
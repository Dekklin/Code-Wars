function cubeOdd(arr) {
  console.log(arr);
  if (arr.map(a => Math.pow(a,3)).filter(a => a%2 !== 0).reduce((a,b) => a + b) === NaN) {
    return undefined;
  } else {
    return arr.map(a => Math.pow(a,3)).filter(a => a%2 !== 0).reduce((a,b) => a + b);
  }
  };
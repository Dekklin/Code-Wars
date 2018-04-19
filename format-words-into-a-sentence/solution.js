function formatWords (arr) {
  if (!arr) return '';
  arr = arr.filter(x => x !== '');
  return arr.slice(0,-2).join(', ') + (arr.length > 2 ? ', ' : '') + arr.slice(-2).join(' and ');
}
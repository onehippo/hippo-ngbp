export function reverseFilter() {
  return function filter(input) {
    var i;
    var result = '';
    input = input || '';

    for (i = 0; i < input.length; i++) {
      result = input.charAt(i) + result;
    }

    return result;
  };
}

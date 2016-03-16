export function reverseFilter() {
  return function filter(input) {
    let result = '';
    input = input || '';

    for (let i = 0; i < input.length; i++) {
      result = input.charAt(i) + result;
    }

    return result;
  };
}

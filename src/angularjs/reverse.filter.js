function reverseFilter() {
  return function filter(input) {
    input = input || '';
    // Based on http://exploringjs.com/es6/ch_strings.html#_reversing-strings-with-non-bmp-code-points
    return [...input].reverse().join('');
  };
}

export default reverseFilter;

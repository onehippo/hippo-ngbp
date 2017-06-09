function reverseFilter() {
  return function filter(input = '') {
    return Array.from(input).reverse().join('');
  };
}

export default reverseFilter;

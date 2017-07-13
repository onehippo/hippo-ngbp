export default class ApiService {
  constructor($q) {
    'ngInject';

    this.$q = $q;
  }

  getUser(name) {
    return this.$q.resolve({
      name,
      description: `Hi I'm ${name}`,
    });
  }
}

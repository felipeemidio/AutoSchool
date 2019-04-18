class StudentService {
  static load(key) {
    return new Promise((resolve, reject) => {
      const value = window.localStorage.getItem(key);
      resolve(value ? JSON.parse(value) : []);
    });
  }

  static save(key, values) {
    return new Promise((resolve, reject) => {
      window.localStorage.setItem(key, JSON.stringify(values));
      resolve();
    });
  }
}

export default StudentService;
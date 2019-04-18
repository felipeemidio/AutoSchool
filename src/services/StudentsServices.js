class StudentService {
  static load(key) {
    return new Promise((resolve, reject) => {
      const value = window.localStorage.getItem(key);
      resolve(value ? JSON.parse(value) : []);
    });
  }

  static save(key, values) {
    return new Promise((resolve, reject) => {
      window.localStorage.setItem("students", JSON.stringify(students));
      resolve();
    });
  }
}

export default StudentService;
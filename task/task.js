/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name : "Adzhimatinur Azzahra",
    age : 19,
    major : "Teknik Informatika",
  },

  {
    name : "Yuki Rahamyanti",
    age : 20,
    major : "Arsitektur",
  },

  {
    name : "Frida Yasmine",
    age : 19,
    major : "Akuntansi",
  },

  {
    name : "Regina Falda",
    age : 19,
    major : "PTI",
  },

  {
    name : "Auliyani Abdillah Rambe",
    age : 20,
    major : "Akuntansi",
  }
]

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
function all() {
  for(const murid of users){
    console.log(murid);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
function store(user) {
  users.push(user);

  console.log(users);
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
function update(index, user) {
  users[index] = user;

  console.log(users);
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {
  users.splice(index, 1);

  console.log(users);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Zahra");
  const newUser = {
    name: "Zahra",
    age: 20,
    major: "Teknik Informatika",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Yuki");
  const editedIndex = 1;
  const editedUser = {
    name: "Rafli Aqsa",
    age: 21,
    major: "Kedokteran",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Frida");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
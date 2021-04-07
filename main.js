//ambil elemen user
const user = document.getElementById('user');

// init variable
const user_logged_in = "Marcell";

// // ES5
// user.innerHTML = "Selamat datang, " + user_logged_in;

// ES6
user.innerHTML = `Selamat datang, ${user_logged_in}`;
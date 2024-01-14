class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(this.firstName, "is login");
    return this;
  }

  logout() {
    console.log(this.firstName, "is logout");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.firstName, "the score is", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

let users = [];

document.querySelector("#registerButton").addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.querySelector(".inputFirstName").value;
  let lastName = document.querySelector(".inputLastName").value;
  let userEmail = document.querySelector(".inputEmail").value;

  const newUser = new User(firstName, lastName, userEmail);

   // Dodaj novog korisnika u niz ili objekat
   users.push(newUser);

   // Sačuvaj korisnike u localStorage
   localStorage.setItem("users", JSON.stringify(users));

 // users[firstName] = newUser;
  document.querySelector("#form").reset();
  console.log(users);
});




document.querySelector('#showUser').addEventListener('click', e =>{
  // Dohvati korisnike iz localStorage
  const storedUsers = localStorage.getItem("users");

  console.log(storedUsers);
  // Proveri da li postoje sačuvani korisnici
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    console.log(users);
  }
  
})



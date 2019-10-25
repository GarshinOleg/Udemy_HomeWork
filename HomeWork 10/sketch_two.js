let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['ivan', 'grozniy']); //Пользователь ivan grozniy, его возраст 30

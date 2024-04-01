function calculateAge() {
    var birthDate = new Date(document.getElementById('birthDate').value);
    var now = new Date();
    var age = now.getFullYear() - birthDate.getFullYear();
    var monthDiff = now.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }
    
    document.getElementById('result').innerText = "You are " + age + " years old.";
  }
  document.getElementById('calculateButton').addEventListener('click', calculateAge);


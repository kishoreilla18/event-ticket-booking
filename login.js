const database = [
    { "userID": 210303124491, "Password": "pu@91" },
    { "userID": 210303124412, "Password": "pu@012" },
    { "userID": 210303124425, "Password": "pu@25" },
    { "userID": 210303124417, "Password": "pu@17" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('alert');

    function isUserValid(userID, password) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].userID == userID && database[i].Password === password) {
                return true;
            }
        }
        return false;
    }

    function logIn(userID, password) {
        if (isUserValid(userID, password)) {
            window.location.href = "index.html";
        } else {
            alertBox.textContent = "Credentials Invalid!!";
            alertBox.style.display = 'block';
        }
    }

    logIn(userID, password);
});

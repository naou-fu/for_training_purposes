// Fetch data from JSON file instead of using import assertion
let userData;

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        userData = JSON.stringify({
            "username": data.username,
            "password": data.password
        });
        
        console.log(userData);
    })
    .catch(error => console.error('Error loading data:', error));


// Handle user sign up
document.getElementById('signupForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
        try{
            const response = await fetch('http://localhost:3000', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'},
                    body:JSON.stringify({
                        username,
                        password
                    })
            });
            if(!response.ok){
                throw new Error('HTTP error!status: ${response.status}');
            }
            const data = await response.json();
            console.log('User created:', data);
            alert('User Created successfully!');
        }
        catch (error){
            console.error('Erroe creating user:'+error.message);
            alert('Error creating user:'+error.message);
        }
        
    // Store user in local storage
    localStorage.setItem(username, password);
    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Handle user login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists
    if (localStorage.getItem(username) === password) {
        alert('Login successful!');
        window.location.href = 'welcome.html'; // Redirect to welcome page
    } else {
        alert('Invalid credentials, please try again.');
    }
});

// Handle logout
document.getElementById('logoutButton')?.addEventListener('click', function() {
    alert('You have logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});
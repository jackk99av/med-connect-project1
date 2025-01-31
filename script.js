document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const logoutBtn = document.querySelector(".logout-btn");
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const closeButtons = document.querySelectorAll(".close");

    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
    });

    signupBtn.addEventListener("click", function() {
        signupModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        } else if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
    });

    document.querySelector("#login-modal form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents default behavior
        loginModal.style.display = "none";
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.hidden = false;
    });

    document.querySelector("#signup-modal form").addEventListener("submit", function(event) {
        event.preventDefault();
        signupModal.style.display = "none";
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.hidden = false;
    });

    logoutBtn.addEventListener("click", function() {
        loginBtn.style.display = "inline-block";
        signupBtn.style.display = "inline-block";
        logoutBtn.hidden = true;
    });
});

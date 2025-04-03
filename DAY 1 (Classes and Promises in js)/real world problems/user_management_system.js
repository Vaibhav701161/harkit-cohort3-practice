/*
1. Design a User Management System using Classes
💡 Scenario: You are building a user authentication system for a web application. You need to create a User class with the following functionalities:

Store user information (name, email, password).

A method to check if the password is correct (checkPassword()).

A method to display user details securely (without exposing the password).

🔧 Implement this using a JavaScript class.
*/
// User Management System using Classes


class User{
    constructor(name,email,password){
        this.name = name,
        this.email = email,
        this.password = password
    }

    checkpassword(password){
        return this.password === password;
    }
    
    displayUserDetails(){
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}
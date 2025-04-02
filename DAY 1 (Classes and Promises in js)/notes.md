# **Classes in JavaScript**  

### **Why do we need classes?**  
Before ES6, JavaScript used constructor functions and prototypes for object creation. This approach lacked structure and was hard to scale. Classes provide a **cleaner, more organized** way to define objects and manage behavior.  

### **Defining a Class**  
A class is essentially a blueprint for creating objects.  

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const vaibhav = new User("Vaibhav", 22);
console.log(vaibhav.getDetails());
```

Here, the `User` class defines properties and a method. Every instance of `User` will have `name`, `age`, and access to `getDetails()`.  

### **Inheritance**  
When one class extends another, it inherits its properties and methods.  

```js
class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  getAdminDetails() {
    return `${this.name} is an ${this.role}.`;
  }
}

const karan = new Admin("Karan", 25, "Administrator");
console.log(karan.getDetails());
console.log(karan.getAdminDetails());
```

Here, `Admin` extends `User`, meaning `Admin` objects can use both `getDetails()` and their own `getAdminDetails()`.  

### **Static Methods**  
Sometimes, a function doesn't need to be tied to an instance.  

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3));
```

`add()` is called on the class itself, not on an instance.  

---

# **Promises in JavaScript**  

### **Why do we need Promises?**  
JavaScript executes code **asynchronously**, meaning some tasks (like fetching data) take time. Instead of blocking execution, JavaScript uses **callbacks**. However, **nested callbacks** create a messy structure known as "callback hell." Promises solve this by making asynchronous code more readable and manageable.  

### **Creating a Promise**  
A promise represents a **future value**—it can either **resolve** (success) or **reject** (failure).  

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data received.");
    } else {
      reject("Error fetching data.");
    }
  }, 2000);
});

fetchData
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

### **Chaining Promises**  
Instead of nesting callbacks, `.then()` is used to **chain multiple async operations**.  

```js
function getUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ username, id: 101 }), 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post1", "Post2"]), 1000);
  });
}

getUser("Justin")
  .then((user) => getPosts(user.id))
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));
```

### **Promisifying setTimeout**  
A function can be converted to return a promise.  

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("2 seconds passed."));
```

### **Promise.all and Promise.race**  
**Promise.all** runs multiple promises in parallel and waits for all to resolve.  

```js
const p1 = new Promise((res) => setTimeout(() => res("First done"), 3000));
const p2 = new Promise((res) => setTimeout(() => res("Second done"), 2000));

Promise.all([p1, p2]).then((results) => console.log(results));
```

**Promise.race** returns the result of the fastest promise.  

```js
Promise.race([p1, p2]).then((result) => console.log(result));
```

---

# **Promisified File System Operations**  

The built-in Node.js `fs` module uses callbacks. We can wrap its methods in Promises.  

```js
const fs = require("fs").promises;

async function readFileContent(file) {
  try {
    const content = await fs.readFile(file, "utf-8");
    console.log(content);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFileContent("data.txt");
```

Similarly, we can **write** and **clean** files.  

```js
async function writeFileContent(file, content) {
  try {
    await fs.writeFile(file, content);
    console.log("File written successfully.");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

writeFileContent("output.txt", "Hello, Aditi!");
```

For **cleaning a file** (writing an empty string):  

```js
async function cleanFile(file) {
  try {
    await fs.writeFile(file, "");
    console.log("File cleaned.");
  } catch (error) {
    console.error("Error cleaning file:", error);
  }
}

cleanFile("output.txt");
```

---

# **Key Takeaways**  

- **Classes** bring structure to JavaScript object-oriented programming.  
- **Inheritance** allows one class to extend another, reducing code duplication.  
- **Promises** handle asynchronous operations better than callbacks.  
- **Promise chaining** keeps asynchronous operations readable and avoids nesting.  
- **Promisifying functions** (like `setTimeout` or `fs.readFile`) makes async code more manageable.  
- **Promise.all** waits for multiple promises to complete, while **Promise.race** returns the first resolved promise.  

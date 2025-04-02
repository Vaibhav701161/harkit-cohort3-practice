## **Classes in JavaScript**

### 1. What are classes in JavaScript? How do they differ from function constructors?  
**Answer:** Classes in JavaScript are syntactic sugar over prototype-based inheritance. They provide a structured way to create objects and define their behavior. They differ from function constructors because:  
- **Classes** use `class` syntax and a `constructor()` method.  
- **Function constructors** use regular functions with `this`.  
- Class methods are automatically added to the prototype, whereas function constructors require explicit addition.

---

### 2. What is the difference between `class` and `prototype` in JavaScript?  
**Answer:**  
- **`class`** is an ES6 feature that provides an easier way to define object blueprints.  
- **`prototype`** is an object that stores shared properties and methods of instances.  
- Internally, classes still use the prototype mechanism for method sharing.

---

### 3. How do you define a class in JavaScript?  
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

---

### 4. What are the different types of class methods in JavaScript?  
- **Instance methods**: Defined inside the class and used on objects.  
- **Static methods**: Defined with `static` and called on the class itself.

---

### 5. What is the purpose of the `constructor` method inside a class?  
The `constructor` initializes object properties when an instance is created.

---

### 6. Can you inherit from another class in JavaScript? How?  
Yes, using `extends` and `super()`.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

---

### 7. What is method overriding in JavaScript?  
When a subclass provides a new definition of a method inherited from the parent class.

---

### 8. How do you create a static method in a JavaScript class?  
```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
```

---

### 9. What is the difference between a static method and an instance method?  
- **Static methods** belong to the class and are not accessible from instances.  
- **Instance methods** belong to the object and can access instance properties.

---

### 10. Can JavaScript classes have private methods? If so, how?  
Yes, using `#` before the method name.

```js
class Example {
  #privateMethod() {
    console.log("This is private");
  }
}
```

---

### 11. What is the `super` keyword in JavaScript, and when is it used?  
`super` calls the parent class constructor inside a subclass.

---

### 12. Can you extend multiple classes in JavaScript? Why or why not?  
No, JavaScript does not support multiple inheritance. However, mixins can be used.

---

### 13. What are the advantages of using classes over function constructors?  
- Cleaner syntax  
- Automatic method addition to the prototype  
- Better readability  

---

### 14. What is the role of `getters` and `setters` in JavaScript classes?  
They allow controlled access to object properties.

```js
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
```

---

### 15. How can you prevent a class from being instantiated?  
By throwing an error inside the constructor.

```js
class Singleton {
  constructor() {
    if (new.target === Singleton) {
      throw new Error("Cannot instantiate Singleton directly");
    }
  }
}
```

---

## **Promises in JavaScript**

### 16. What are Promises in JavaScript?  
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

---

### 17. Why do we use Promises instead of callbacks?  
To avoid **callback hell** and improve code readability.

---

### 18. What are the different states of a Promise?  
1. **Pending**  
2. **Fulfilled**  
3. **Rejected**  

---

### 19. What is the difference between `resolve()` and `reject()`?  
- `resolve()` marks a Promise as successful.  
- `reject()` marks it as failed.

---

### 20. How does `.then()` work in Promises?  
It takes a callback that runs when the Promise is resolved.

---

### 21. What is the purpose of `.catch()` in Promises?  
Handles errors in Promises.

---

### 22. How does `.finally()` work in Promises?  
Runs regardless of success or failure.

---

### 23. What happens if a Promise is neither resolved nor rejected?  
It remains in the **pending** state indefinitely.

---

### 24. How can you handle multiple Promises simultaneously?  
Using `Promise.all()`.

---

### 25. What is the difference between `Promise.all()`, `Promise.any()`, `Promise.allSettled()`, and `Promise.race()`?  
- **`Promise.all()`** – Resolves when all Promises resolve.  
- **`Promise.any()`** – Resolves when any one resolves.  
- **`Promise.allSettled()`** – Resolves when all are done (either fulfilled or rejected).  
- **`Promise.race()`** – Resolves when the first one settles.  

---

## **Promisification**

### 31. What is Promisification?  
Converting callback-based functions to return Promises.

---

### 32. Why do we need to promisify callback-based functions?  
To avoid callback hell and improve readability.

---

### 33. How do you convert a callback-based function into a Promise-based function?  
```js
const fs = require('fs');
function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
```

---

## **Working of Promises Under the Hood**

### 38. How does JavaScript handle asynchronous operations internally using Promises?  
Using the **Event Loop** and **Microtask Queue**.

---

### 39. What is the role of the Event Loop in Promise execution?  
Moves resolved Promises to the **microtask queue**, which executes after synchronous code.

---

### 40. How do Promises differ from traditional callback-based asynchronous execution?  
- Promises avoid **callback nesting**.  
- They return a **single value** instead of requiring a callback.

---

### 41. How are Promises added to the microtask queue?  
When `resolve()` is called, it goes to the **microtask queue**, executed **before** macrotasks.

---

### 42. What is the difference between the macrotask queue and the microtask queue?  
- **Microtask queue**: Includes Promises (`.then()`, `.catch()`).  
- **Macrotask queue**: Includes `setTimeout()`, `setInterval()`.  


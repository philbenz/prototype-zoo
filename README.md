# The Prototype Zoo

During this exercise, you'll apply your knowledge of object-oriented programming (OOP) and prototypal inheritance. 

Your goal is to create a zoo and add animals to it. Yes, you read that correctly--you're creating a zoo! You're going to one-up Matt Damon, whom just bought a zoo:

![We Bought a Zoo](./images/we-bought-a-zoo.jpg)

# Instructions
To make your zoo successful, you'll need to follow the following three steps: 

## Step 1 of 3: Fork and Clone
Fork and clone this repository to here: 

```javascript
~/workspace
```

If `workspace` doesn't exist, create it: 


```javascript
mkdir ~/workspace
``` 

## Step 2 of 3: Create Your Constructors
You'll need to create two constructors:

- `Animal`
- `Zoo`

Place your code for each constructor in its appropriate file in `./src/`.

### `Animal`
An instance of this constructor should have the following properties and methods:

#### properties
- `name`: has a string as a value
- `age`: has an integer as a value
- `kind`: has a string as a value--e.g., "horse", "lion", or "pig."
- `awake`: has a `Boolean` value, and the default is `false`

#### methods
- `speak()`: has a string as a value (e.g., a pig would return "oink!")
- `growUp()`: adds one year to animal's `age`
- `feed()`: if the animal is awake, return's the string `"NOM NOM NOM"`
- `wakeUp()`: changes `awake` to `true`
- `sleep()`: changes `awake` to `false`

### `Zoo`
An instance of this constructor should have the following properties and methods:

#### properties
- `name`: has a string as a value
- `location`: has a string as a value
- `status`: has a string as a value, default is `"closed"`
- `animals`: has an array as a value

#### methods
- `changeLocation()`: updates value of `location`
- `open()`: updates value of `status` to `"open"`
- `close()`: updates value of `status` to `"closed"`
- `isOpen()`: returns a `Boolean` value.
- `addAnimal()`: ONLY if the zoo is open and the kind of animal is not already in the zoo, adds an animal to `animals`. 
- `removeAnimal()`: ONLY if the zoo is open, removes an animal from `animals`. 

# Step 3 of 3: Submission
When you're done, push your work to your forked repository. Then copy the URL of your forked repository and paste it into the LMS (learning management system).

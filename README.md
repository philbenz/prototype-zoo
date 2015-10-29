# The Prototype Zoo

During this exercise, you'll apply your knowledge of object-oriented programming (OOP) and prototypal inheritance. 

Your goal is to re-create a zoo full of animals. Yes, you read that correctly: You're creating a zoo! You're going to one-up Matt Damon, whom just bought a zoo:

![We Bought a Zoo](./images/we-bought-a-zoo.jpg)

We're actually going to create a zoo and add animals to it.

# Instructions
To make your zoo successful, you'll need to first fork and clone this repository. Then you'll need to create two constructors:

- `Animal`
- `Zoo`

Place your code for each constructor in its appropriate file in `./src/`.

## `Animal`
An instance of this constructor should have the following properties and methods:

### properties
- `name`: has a string as a value
- `age`: has an integer as a value
- `kind`: has a string as a value--e.g., "horse", "lion", or "pig."
- `awake`: has a `Boolean` value, and the default is `false`
- `speak`: has a string as a value (e.g., a pig would return "oink!")

### methods
- `growUp()`: adds one year to animal's age
- `feed()`: if the animal is awake, return's the string `"NOM NOM NOM"`
- wakeUp(): changes `awake` to `true`
- sleep(): changes `awake` to `false`

## `Zoo`
An instance of this constructor should have the following properties and methods:

### properties
- `name`: has a string as a value
- `location`: has a string as a value
- `status`: has a string as a value, default is `"closed"`
- `animals`: has an array as a value

### methods
- `changeLocation()`: updates value of `location`
- `open()`: updates value of `status` to `"open"`
- `open()`: updates value of `status` to `"closed"`
- `isOpen()`: returns a `Boolean` value.
- `addAnimal`: ONLY if the zoo is open and the kind of animal is not already in the zoo, adds an animal to `animals`. 
- `removeAnimal`: ONLY if the zoo is open, removes an animal from `animals`. 

# Submission
When you're done, copy the URL of your forked repository and paste it into the LMS (learning management system).

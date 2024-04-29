const greeting = function (name) {
    return `Hi, ${name}`
}

//arrow function -  explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

//arrow function -  implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTradicionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great resposability')
finctionalCharacter.messageWithArrowFunction('I really miss you so much bby')

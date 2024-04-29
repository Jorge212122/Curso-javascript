function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', 'Good bye everybody!')
const falconHeavyRocket = new Rocket('Falcon Heavy', 'See you soon!')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const rocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful launch'
const falcon9Rocket1 = rocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction)

console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())
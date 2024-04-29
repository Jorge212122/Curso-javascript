function PowerPuffGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function () {
        console.log(`
        Powerpuff Girl Information: 
        Name: ${this.name}
        Color: ${this.color}
        SuperPower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }
    
    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the Powerpuff girls`)
    }
}

const blossom = new PowerPuffGirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerPuffGirl('Buttercup', 'Green', 'Super Strenght')
const Bubbles = new PowerPuffGirl('Bubbles', 'Blue', 'Flight')

blossom.displayInfo()
buttercup.displayInfo()
Bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
Bubbles.displayInfo()
class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }

    hunt() {
        this.food += 5
    }
    eat() {
        if (this.food >= 2) {
            this.food -= 2
        } else if (this.food === 1) {
            this.food -= 1
            this.isHealthy = false
        } else if (this.food === 0) {
            this.isHealthy = false
        }
    }
    giveFood(traveler, amount) {
        if (amount <= this.food) {
            traveler.food += amount
            this.food -= amount
        } else {
            console.log(`${this.name} doesn't have enough food to do that!`)
        }
    }
}
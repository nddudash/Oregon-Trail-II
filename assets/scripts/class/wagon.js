class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    
    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }
    
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        } else {
            console.warn("This Wagon Has No Room For That Traveler!")
        }
    }

    shouldQuarantine() {
        if (this.passengers.some(traveler => traveler.isHealthy === false)) {
            return true
        }
    }

    totalFood() {
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index++) {
            let traveler = this.passengers[index]
            totalFood += traveler.food
        }
        return totalFood
    }
}
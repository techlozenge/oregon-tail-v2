(function () {
    var Traveler = (function () {
        function Traveler(name) {
            this.name = name;
        }
        Traveler.prototype.getName = function () {
            return this.name;
        };
        Traveler.prototype.getFood = function () {
            return this.food;
        };
        Traveler.prototype.getisHealthy = function () {
            return this.isHealthy;
        };
        Traveler.prototype.setName = function (newName) {
            this.name = newName;
        };
        Traveler.prototype.setFood = function (food) {
            this.food = food;
        };
        Traveler.prototype.setisHealthy = function (isHealthy) {
            this.isHealthy = isHealthy;
        };
        Traveler.prototype.hunt = function () {
            if (Math.round(Math.random())) {
                this.food = this.food + 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            this.food = this.food - 20;
            if (this.food < 20) {
                this.isHealthy = false;
            }
            else {
                this.isHealthy = true;
            }
            return this.isHealthy;
        };
        return Traveler;
    }()); // end class Traveler
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.getCapacity = function () {
            return this.capacity;
        };
        Wagon.prototype.getPassengers = function () {
            return this.passengerArray;
        };
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return traveler.getName() + " added to wagon. The number of passengers is now " + this.passengerArray.length;
            }
            else {
                return traveler.getName() + " was NOT added to wagon.";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            var i = 0;
            for (i = 0; i < this.passengerArray.length; i++) {
                if (!this.passengerArray[i].getisHealthy()) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var total_food = 0;
            var i = 0;
            for (i = 0; i < this.passengerArray.length; i++) {
                total_food = total_food + this.passengerArray[i].getFood();
            }
            return total_food;
        };
        return Wagon;
    }()); // end Wagon class
    console.log("");
    console.log("[ *********************** BEGIN *********************** ]");
    console.log("");
    // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var traveler1 = new Traveler("Thomas");
    traveler1.setFood(50);
    traveler1.setisHealthy(true);
    var traveler2 = new Traveler("Richard");
    traveler2.setFood(30);
    traveler2.setisHealthy(true);
    var traveler3 = new Traveler("Harold");
    traveler3.setFood(75);
    traveler3.setisHealthy(true);
    var traveler4 = new Traveler("Charles");
    traveler4.setFood(25);
    traveler4.setisHealthy(true);
    var traveler5 = new Traveler("Edward");
    traveler5.setFood(60);
    traveler5.setisHealthy(true);
    console.log("Created " + traveler1.getName() + ", " + traveler2.getName() + ", " + traveler3.getName() + ", " + traveler4.getName() + ", " + traveler5.getName());
    // Create wagon with an empty passenger list and a capacity of 4.
    var wagon1 = new Wagon(4);
    console.log("created an empty wagon that can hold " + wagon1.getCapacity() + " passengers");
    // Make 3 of 5 the travelers eat by calling their eat methods
    console.log(traveler1.getName() + " food before eating: " + traveler1.getFood());
    traveler1.eat();
    console.log(traveler1.getName() + " ate. Food is now: " + traveler1.getFood() + " and Health is now: " + traveler1.getisHealthy());
    console.log(traveler3.getName() + " food before eating: " + traveler3.getFood());
    traveler3.eat();
    console.log(traveler3.getName() + " ate. Food is now: " + traveler3.getFood() + " and Health is now: " + traveler3.getisHealthy());
    console.log(traveler5.getName() + " food before eating: " + traveler5.getFood());
    traveler5.eat();
    console.log(traveler5.getName() + " ate. Food is now: " + traveler5.getFood() + " and Health is now: " + traveler5.getisHealthy());
    // Make the remaining 2 travelers hunt
    console.log(traveler2.getName() + " Food before hunt: " + traveler2.getFood());
    traveler2.hunt();
    console.log(traveler2.getName() + " Food after hunt: " + traveler2.getFood());
    console.log(traveler4.getName() + " Food before hunt: " + traveler4.getFood());
    traveler4.hunt();
    console.log(traveler4.getName() + " Food after hunt: " + traveler4.getFood());
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method
    var passengers = [traveler1, traveler2, traveler3, traveler4, traveler5];
    var i = 0;
    for (i = 0; i < passengers.length; i++) {
        if (Math.round(Math.random())) {
            console.log(wagon1.addPassenger(passengers[i]));
        }
        else {
            console.log(passengers[i].getName() + " did not make it onto the wagon.");
        }
    }
    // Run the isQuarantined method for the wagon
    if (wagon1.isQuarantined()) {
        console.log("Someone on the wagon is sick so it must be Quarantined.");
    }
    else {
        console.log("This wagon is going to Oregon!");
    }
    // Run the getFood method for the wagon
    console.log("The wagons food total is " + wagon1.getFood());
    console.log("");
    console.log("[ ************************ END ************************ ]");
    console.log("");
})();

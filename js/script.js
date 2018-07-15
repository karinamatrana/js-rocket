var car = {
            make: 'VW',
            type: 'Bora',
            color: 'blue',
            engineTurnedOn: false,
            numberOfWheels: 4,
            seats: [
                'seat1',
                'seat2',
                'seat3',
                'seat4'
            ],
            turnOn : function() {
                this.engineTurnedOn = true;
            },
            fly : function() {
                alert("This car cannot fly.");
            },
            switchCar : function(isOn) {
                console.log('turn car ' + isOn);
                if(isOn == true) {
                    this.isTurnedOn = true;
                } else {
                    this.isTurnedOn = false;
                }
            }
        };

console.log('hello there');
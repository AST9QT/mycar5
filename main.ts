radio.onReceivedNumber(function (receivedNumber) {
    Y = receivedNumber / 5
    X = receivedNumber % 5
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(X, Y)
})
let Y = 0
let X = 0
radio.setGroup(5)
X = 2
Y = 2
basic.showLeds(`
    . . # . .
    . . # . .
    # # . # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})

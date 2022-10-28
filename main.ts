radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 0 && receivedNumber < 25) {
        new_Y = receivedNumber / 5
        new_X = receivedNumber % 5
        led.plot(new_X, new_Y)
        led.unplot(X, Y)
        X = new_X
        Y = new_Y
        left_forward = addForward * (5 - Y)
        right_forward = left_forward
        if (X < 2) {
            right_forward += addForward * (2 - X)
        } else if (X > 2) {
            left_forward += addForward * (X - 2)
        }
    } else {
        Kitronik_Move_Motor.stop()
        left_forward = 0
        right_forward = 0
    }
})
let new_Y = 0
let new_X = 0
let Y = 0
let X = 0
let right_forward = 0
let left_forward = 0
let addForward = 0
let blink_zip = 0
addForward = 15
left_forward = 0
right_forward = 0
radio.setGroup(5)
X = 2
Y = 2
new_X = X
new_Y = Y
basic.showLeds(`
    . . # . .
    . . # . .
    # # . # #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(0)
moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setBrightness(255)
for (let index = 0; index < 4; index++) {
    moveMotorZIP.show()
    basic.pause(500)
    moveMotorZIP.clear()
    basic.pause(500)
}
basic.forever(function () {
    if (left_forward == 0 && right_forward == 0) {
        Kitronik_Move_Motor.stop()
    } else {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, left_forward)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, right_forward)
    }
    basic.pause(200)
})
basic.forever(function () {
	
})

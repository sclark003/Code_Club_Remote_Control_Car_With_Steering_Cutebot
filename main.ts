let scaledTheta = 0
let theta = 0
let v = 0
let a = 0.25
let fric = 0.97
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        v += a
    }
    if (input.buttonIsPressed(Button.B)) {
        v += 0 - a
    }
    v*=fric
radio.sendValue("velocity", v)
})
basic.forever(function () {
    theta = Math.atan2(input.acceleration(Dimension.X), input.acceleration(Dimension.Y))
    scaledTheta = 2 * theta / Math.PI * 10
    radio.sendValue("angle", scaledTheta)
})

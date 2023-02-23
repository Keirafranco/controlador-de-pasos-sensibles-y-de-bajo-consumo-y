input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pasos)
    basic.pause(3000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
})
let Pasos = 0
Pasos = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 800) {
        Pasos += 1
    }
})

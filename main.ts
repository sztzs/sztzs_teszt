basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.forever(function () {
    basic.showString("Dönts erre:")
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    }
})

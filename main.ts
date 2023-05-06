input.onButtonPressed(Button.A, function () {
    bigCircle()
})
function bigCircle () {
    Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Standard)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 35)
    basic.pause(4000)
    Kitronik_Move_Motor.stop()
}

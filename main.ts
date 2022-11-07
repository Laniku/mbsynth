enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    tone += 10
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(tone)
})
input.onButtonPressed(Button.B, function () {
    tone += -10
})
let tone = 0
tone = 0
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
music.playMelody("C5 B A G F E D C ", 1005)
music.playTone(440, music.beat(BeatFraction.Whole))
basic.clearScreen()
tone = 440
radio.setGroup(1)
basic.forever(function () {
    music.ringTone(tone)
})

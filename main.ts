let P2 = 0
let P1 = 0
let P0 = 0
basic.forever(function () {
    P2 = pins.digitalReadPin(DigitalPin.P14)
    P1 = pins.digitalReadPin(DigitalPin.P2)
    P0 = pins.digitalReadPin(DigitalPin.P1)
    if (P0 == 0 && (P1 == 0 && P2 == 1)) {
        music.playTone(494, music.beat(BeatFraction.Half))
        basic.showString("7")
    } else if (P0 == 0 && (P1 == 1 && P2 == 0)) {
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.showString("6")
    } else if (P0 == 0 && (P1 == 1 && P2 == 1)) {
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.showString("5")
    } else if (P0 == 1 && (P1 == 0 && P2 == 0)) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.showString("4")
    } else if (P0 == 1 && (P1 == 0 && P2 == 1)) {
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.showString("3")
    } else if (P0 == 1 && (P1 == 1 && P2 == 0)) {
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.showString("2")
    } else if (P0 == 1 && (P1 == 1 && P2 == 1)) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.showString("1")
    } else {
        basic.clearScreen()
    }
})

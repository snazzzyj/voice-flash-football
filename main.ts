let sound_to_colour = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGBW)
strip.setBrightness(100)
basic.forever(function () {
    sound_to_colour = Math.map(input.soundLevel(), 0, 187, 0, 280)
    strip.showColor(neopixel.hsl(sound_to_colour, 255, 20))
})

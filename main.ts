
let jugador = game.createSprite(2, 4)
let punto = game.createSprite(randint(0, 4), 0)
let tiempo = 30

game.setScore(0)
game.startCountdown(30000)

input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
    })

    input.onButtonPressed(Button.B, function () {
        jugador.change(LedSpriteProperty.X, 1)
        })

        basic.forever(function () {
            punto.change(LedSpriteProperty.Y, 1)
                basic.pause(500)

                    if (punto.get(LedSpriteProperty.Y) == 4 &&
                            punto.get(LedSpriteProperty.X) == jugador.get(LedSpriteProperty.X)) {
                                    game.addScore(1)
                                            punto.set(LedSpriteProperty.X, randint(0, 4))
                                                    punto.set(LedSpriteProperty.Y, 0)
                                                        } else if (punto.get(LedSpriteProperty.Y) == 4) {
                                                                punto.set(LedSpriteProperty.X, randint(0, 4))
                                                                        punto.set(LedSpriteProperty.Y, 0)
                                                                            }
                                                                            })

                                                                            
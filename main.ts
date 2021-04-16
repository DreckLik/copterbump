namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const cloud = SpriteKind.create()
    export const landingPad = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += controller.dy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += controller.dx(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += controller.dx(100)
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.landingPad, function (sprite, otherSprite) {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += controller.dy()
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.cloud, function (sprite, otherSprite) {
    sprite.vx += -1 * sprite.vx
    sprite.vy += -1 * sprite.vy
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
let copter: Sprite = null
game.splash("Cloud Bump", "Control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 
    . . . . f f f . . . . . . f f f 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . f . . . . . 
    f f f f f f f f f f f f f f f f 
    f 1 2 2 2 2 2 2 2 2 2 2 9 9 1 f 
    f 2 2 f 2 2 2 2 2 2 2 2 9 9 9 f 
    . f f f 2 2 2 2 2 2 2 2 2 2 2 f 
    . . . f f f f f f f f f f f f f 
    . . . . . . . f f . . . f f f . 
    . . . . f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Helicopter)
copter.setStayInScreen(true)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . . . 1 1 1 1 1 . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    `, SpriteKind.cloud)
cloud1.x = 20
cloud1.y = 30
let could2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 . . . . 1 1 . 
    1 1 1 1 1 1 . . . . . . . 1 1 . 
    . . 1 1 1 . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
could2.x = 50
could2.y = 65
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . 1 1 1 1 1 . . 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
cloud3.x = 100
cloud3.y = 40
let landingPad2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 1 9 9 9 9 9 9 9 9 9 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    `, SpriteKind.landingPad)
landingPad2.y = 125
landingPad2.y = 80

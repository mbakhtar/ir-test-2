basic.showIcon(IconNames.SmallHeart)
myModules.left.setEnabled(true)
myModules.right.setEnabled(true)
basic.forever(function () {
    if (myModules.iR1.brightness() == 0) {
        myModules.left.setAngle(45)
        myModules.right.setAngle(-45)
    } else if (modules.reflectedLight1.brightness() == 0) {
        myModules.left.setAngle(-45)
        myModules.right.setAngle(45)
    } else if (myModules.iR2.brightness() == 100) {
        myModules.left.setAngle(360)
        myModules.right.setAngle(-360)
    }
})

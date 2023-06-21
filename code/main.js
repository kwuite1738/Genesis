const Genesis = {}
// Create player
Genesis.Player = new Synthia.Entity()
Genesis.Player.addComponent(
    Synthia.Components.VectorSprite
)
Genesis.Player.Shape = new Synthia.Shape.Circle(20)
Genesis.Player.addComponent(
    Synthia.Components.FollowTarget
)
// Create Animated
Genesis.Animated = new Synthia.Entity()
Genesis.Animated.addComponent(
    Synthia.Components.VectorSprite
)
Genesis.Animated.addComponent(
    Synthia.Components.Tweenable
)

Genesis.Scenes = {
    PlayArea: new Synthia.Scene(
        "Play Area",
        {
            enter: function (info) {
                this.addEntity(Genesis.Player)
                this.addEntity(Genesis.Animated)
                this.Systems = [
                    Synthia.Systems.FollowTarget,
                    Synthia.Systems.Tweening
                ]
                this.Renderers = [
                    Synthia.Renderer.Vector
                ]
            }
        }
    )
}
let game = new Synthia.Engine('screen')
game.changeScene(Genesis.Scenes.PlayArea)
game.start();
const Genesis = {}
Genesis.Entities = {}
Genesis.Entities.Player = new Synthia.Entity();
Genesis.Entities.Player.addComponent(Synthia.Components.Position)
Genesis.Entities.Player.addComponent(Synthia.Components.VectorSprite)
Genesis.Entities.Follows = new Synthia.Entity();
Genesis.Entities.Follows.addComponent(Synthia.Components.VectorSprite)
Genesis.Entities.Follows.addComponent(Synthia.Components.Camera)
Genesis.Entities.Follows.addComponent(Synthia.Components.Position)
Genesis.Entities.Follows.addComponent(Synthia.Components.Tweenable)
Genesis.Entities.Follows.addComponent(Synthia.Components.FollowTarget)

Genesis.Scenes = {
    PlayArea: new Synthia.Scene(
        "Play Area",
        {
            enter: function (info) {
                this.addEntity(Genesis.Entities.Follows)
                this.addEntity(Genesis.Entities.Player)
                this.Systems = [
                    Synthia.Systems.FollowTarget,
                    Synthia.Systems.Tweening,
                    Synthia.Systems.BasicRenderer
                ]
                this.Systems[2].Camera = Genesis.Entities.Follows
            }
        }
    )
}
let game = new Synthia.Engine('screen')
game.changeScene(Genesis.Scenes.PlayArea)
game.start();
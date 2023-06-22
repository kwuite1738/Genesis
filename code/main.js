const Genesis = {}
Genesis.Entities = {}
Genesis.Entities.Player = new Synthia.Entity();
Genesis.Entities.Player.addComponent(Synthia.Components.Position)
Genesis.Entities.Player.addComponent(Synthia.Components.VectorSprite)
Genesis.Entities.Camera = new Synthia.Entity();
Genesis.Entities.Camera.addComponent(Synthia.Components.Camera)
Genesis.Entities.Camera.addComponent(Synthia.Components.Position)
Genesis.Entities.Camera.addComponent(Synthia.Components.Tweenable)
Genesis.Entities.Camera.addComponent(Synthia.Components.FollowTarget)
Genesis.Renderer = {
    Grid: function (display, entities) {
        const gridSize = 50;
        for (let entity of entities.values()) {
            if (entity.hasComponent(Synthia.ComponentTypes.CAMERA)) {
                let w = display.Canvas.width;
                let h = display.Canvas.height;
                let x = entity.Position.x
                let y = entity.Position.y

                for (let column = 0; column < w; column++) {
                    if ((column + x) % gridSize < 1) {
                        display.strokeLine(column, 0, column, h, 'black');
                    }
                }
                for (let row = 0; row < h; row++) {
                    if ((row + y) % gridSize < 1) {
                        display.strokeLine(0, row, w, row, 'black')
                    }
                }
                break;
            }
        }

    } 
}

Genesis.Scenes = {
    PlayArea: new Synthia.Scene(
        "Play Area",
        {
            enter: function (info) {
                this.addEntity(Genesis.Entities.Camera)
                this.addEntity(Genesis.Entities.Player)
                this.Systems = [
                    Synthia.Systems.FollowTarget,
                    Synthia.Systems.Tweening
                ]
                this.Renderers = [
                    Genesis.Renderer.Grid,
                    Synthia.Renderer.Vector
                ]
            }
        }
    )
}
let game = new Synthia.Engine('screen')
game.changeScene(Genesis.Scenes.PlayArea)
game.start();
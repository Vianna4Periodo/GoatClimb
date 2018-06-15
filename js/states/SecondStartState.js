var SecondStartState = {

    // MARK: - Life Cycle

    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function() {

    },

    create: function() {
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.title = this.game.add.text(this.world.width / 2, (this.world.height / 2) - 40, this.maxPoints, { fontSize: '24px', fill: '#fff' });
        this.title.anchor.setTo(0.5, 0.5);
        this.title.setText("Fase - 02");

        this.descricao = this.game.add.text(this.world.width / 2, this.world.height/ 2, this.maxPoints, { fontSize: '14px', fill: '#fff' });
        this.descricao.anchor.setTo(0.5, 0.5);
        this.descricao.setText("Aperte 'Space' para iniciar");
    },

    update: function() {
        if (this.spaceKey.isDown) {
            this.state.start("ThirdState");
        }
    },

};
var GameState = {

    // MARK: - Life Cycle

    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.platformBlockSize = 40;
        this.jumpForce = 1000;
    },

    preload: function() {
        this.load.spritesheet("goat", "assets/goat_jump_sprite.png", 200, 220, 5, 0, 10);
        this.load.image('platform', 'assets/platform_block.png');

        this.load.image('life', 'assets/life.png');
        this.load.image('progress', 'assets/progress.png');
    },

    create: function() {
        this.stage.backgroundColor = '#b4e3dd';

        this.platformsCreate();
        this.goatCreate();

        this.setupHUD();
        this.setupEnemies();
    },

    update: function() {
        this.physics.arcade.collide(this.goat, this.platforms);
        this.goatMovement();
    },

    // MARK: - Public Methods

    setupHUD: function() {
        this.life = this.game.add.sprite(20, 20, 'life');
        this.life.scale.setTo(0.2);

        this.progress = this.game.add.sprite(20, this.world.centerY, 'progress');
        this.progress.anchor.setTo(0.5);
    },

    setupEnemies: function() {
        // this.hawk = this.game.add.sprite(this.world.centerX, this.world.centerY, 'hawk');
        // this.hawk.scale.setTo(0.5);
        // this.hawk.anchor.setTo(0.5);
    },

    platformsCreate: function() {
        this.platforms = this.add.group();
        this.platforms.enableBody = true;
        this.platforms.createMultiple(10, 'platform');

        this.createGround();

        for( var i = 0; i < 9; i++ ) {
            this.platformCreate(this.rnd.integerInRange(0, this.world.width - this.platformBlockSize), this.world.height - 100 * i, this.rnd.integerInRange(1, 5));
        }
    },

    createGround: function() {
        this.platformCreate(0, this.world.height - this.platformBlockSize, 15);
    },

    platformCreate: function(x, y, count) {
        var platform = this.platforms.getFirstDead();
        platform.reset(x, y);
        platform.width = this.platformBlockSize * count;
        platform.body.immovable = true;

        return platform;
    },

    goatCreate: function() {
        this.goat = this.game.add.sprite(this.world.centerX, this.world.height - 40, 'goat');
        this.goat.animations.add("jump", [0, 1, 2, 3, 4], 12, false);
        this.goat.anchor.setTo(0.5, 1);
        this.goat.scale.setTo(0.4);

        this.goat.yOrig = this.goat.y;
        this.goat.yChange = 0;

        this.physics.arcade.enable(this.goat);
        this.goat.body.gravity.y = 2000;
        this.goat.body.checkCollision.up = false;
        this.goat.body.checkCollision.left = false;
        this.goat.body.checkCollision.right = false;
        // this.goat.body.collideWorldBounds = true;
    },

    goatMovement: function() {
        let movimentSpeed = 200;
        var velocity = 0;

        if (this.cursors.left.isDown) {
            velocity = -movimentSpeed;
        } else if (this.cursors.right.isDown) {
            velocity = movimentSpeed;
        } else {
            velocity = 0;
        }

        if (this.goat.body.touching.down) {
            this.goat.play("jump");
            this.goat.body.velocity.y = -this.jumpForce;
        }

        this.goat.body.velocity.x = velocity;

        this.world.wrap(this.goat, this.goat.width / 2, false);

        this.goat.yChange = Math.max( this.goat.yChange, Math.abs(this.goat.y - this.goat.yOrig));
        
        if( this.goat.y > this.cameraYMin + this.game.height && this.goat.alive ) {
          // this.state.start( 'Play' );
          console.log("morreu");
        }
    }

};
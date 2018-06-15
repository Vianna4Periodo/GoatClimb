var ThirdState = {

    // MARK: - Life Cycle

    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.cameraYMin = 99999;
        this.platformYMin = 99999;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.platformBlockSize = 40;
        this.jumpForce = 500;
        this.points = 0;
        this.life = 3;
        this.maxPoints = 500;
    },

    preload: function() {
        this.load.spritesheet("goat", "assets/goat_jump_sprite.png", 200, 220, 5, 0, 10);
        this.load.spritesheet("bird_monster", "assets/bird_monster.png", 111, 86, 4, 1, 4);
        this.load.spritesheet('lifeHUD', 'assets/life.png', 99, 23, 3, 0, 5);

        this.load.image('platform', 'assets/platform_block.png');
        this.load.image('baseMountain', 'assets/base_mountain_3.png');
        this.load.image('background', 'assets/background_3.png');

        this.load.audio('music', ['assets/sound/secondStateMusic.ogg']);
        this.load.audio('jumpMusic', ['assets/sound/jump.ogg']);
    },

    create: function() {
        this.backgroundCreate();
        this.platformsCreate();
        this.enemiesCreate();
        this.goatCreate();

        this.setupMusic();
        this.setupHUD();
    },

    shutdown: function() {
        this.world.setBounds( 0, 0, this.game.width, this.game.height );
        this.cursor = null;
        this.goat.destroy();
        this.goat = null;
        this.platforms.destroy();
        this.platforms = null;
    },

    update: function() {
        this.world.setBounds(0, -this.goat.yChange, this.world.width, this.game.height + this.goat.yChange);

        this.cameraYMin = Math.min(this.cameraYMin, this.goat.y - this.game.height + 130);
        this.camera.y = this.cameraYMin;

        this.physics.arcade.overlap(this.goat, this.birds, this.collisionEnemyHandler, null, this);
        this.physics.arcade.collide(this.goat, this.platforms, null, null, this);

        this.goatMovement();

        this.platforms.forEachAlive( function( elem ) {
            this.platformYMin = Math.min(this.platformYMin, elem.y);

            if(elem.y > this.camera.y + this.game.height) {
                elem.kill();
                var random = this.rnd.integerInRange(1, 10);

                if (random % 3 == 0) {
                    this.enemyCreate(this.platformYMin + 10);
                }

                this.platformCreate(this.rnd.integerInRange(0, this.world.width - this.platformBlockSize), this.platformYMin - 100, this.rnd.integerInRange(1, 3));
            }
        }, this );

        this.updatePoints();
    },

    // MARK: - Public Methods

    setupMusic: function() {
        this.jumpMusic = this.game.add.audio('jumpMusic');

        this.music = this.game.add.audio('music');
        this.music.volume = 0.5;
        this.music.loop = true;
        this.music.play();
    },

    setupHUD: function() {
        this.lifeHUD = this.game.add.sprite(16, 16, 'lifeHUD');
        this.lifeHUD.frame = this.life - 1;
        this.lifeHUD.fixedToCamera = true;

        this.scoreText = this.game.add.text(this.world.width - 16, 14, this.maxPoints, { fontSize: '24px', fill: '#fff' });
        this.scoreText.anchor.setTo(1, 0);
        this.scoreText.fixedToCamera = true;
    },

    backgroundCreate: function() {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.fixedToCamera = true;

        this.baseMountain = this.game.add.sprite(0, 0, 'baseMountain');
        this.baseMountain.anchor.setTo(0, 1);
        this.baseMountain.y = this.world.height;
    },

    platformsCreate: function() {
        this.platforms = this.add.group();
        this.platforms.enableBody = true;
        this.platforms.createMultiple(10, 'platform');

        this.createGround();

        for( var i = 0; i < 9; i++ ) {
            this.platformCreate(this.rnd.integerInRange(0, this.world.width - this.platformBlockSize), this.world.height - 100 - 100 * i, this.rnd.integerInRange(1, 3));
        }
    },

    enemiesCreate: function() {
        this.birds = this.add.group();
        this.birds.enableBody = true;
    },

    enemyCreate: function(positionY) {
        var sizeScale = 1;
        var randomSize = this.rnd.integerInRange(1, 20);

        if (randomSize % 2 == 0) {
            sizeScale = 0.7
        } else if (randomSize % 3 == 0) {
            sizeScale = 1;
        } else {
            sizeScale = 0.5;
        }

        var bird = game.add.sprite(0, positionY, 'bird_monster');
        bird.position.y = positionY;
        bird.scale.setTo(sizeScale);
        bird.animations.add("fly", [0, 1, 2, 3], 6, true);
        bird.play('fly');

        this.physics.arcade.enable(bird);
        bird.enableBody = true;
        bird.body.immovable = true;

        bird.events.onOutOfBounds.add(function(obstacle) {
            obstacle.kill();
        }, this);

        var randomOrigin = this.rnd.integerInRange(1, 9);
        var position = 350;

        if (randomOrigin % 3 == 0) {
            bird.scale.setTo(-sizeScale, sizeScale);
            bird.position.x = 300;

            position = position * -1;
        }

        game.add.tween(bird).to( { x: position }, 20000, Phaser.Easing.Linear.None, true);

        this.birds.add(bird);
    },

    createGround: function() {
        this.platformCreate(0, this.world.height - this.platformBlockSize, 10);
    },

    platformCreate: function(x, y, count) {
        var platform = this.platforms.getFirstDead();
        platform.reset(x, y);
        platform.width = this.platformBlockSize * count;
        platform.body.immovable = true;

        var randomOrigin = this.rnd.integerInRange(1, 9);
        var position = 350;

        if (randomOrigin % 3 == 0) {
            platform.position.x = 300;
            position = position * -1;
        }

        this.game.add.tween(platform).to( { x: position }, 30000, Phaser.Easing.Linear.None, true);

        return platform;
    },

    goatCreate: function() {
        this.goat = this.game.add.sprite(this.world.centerX, this.world.height - 40, 'goat');
        this.goat.animations.add("jump", [0, 1, 2, 3, 4], 20, false);
        this.goat.anchor.setTo(0.5, 1);
        this.goat.scale.setTo(0.4);

        this.goat.yOrig = this.goat.y;
        this.goat.yChange = 0;

        this.physics.arcade.enable(this.goat);
        this.goat.body.gravity.y = 700;
        this.goat.body.checkCollision.up = false;
        this.goat.body.checkCollision.left = false;
        this.goat.body.checkCollision.right = false;
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
            this.points += 10;
            this.jumpMusic.play();
        }

        this.goat.body.velocity.x = velocity;

        this.world.wrap(this.goat, this.goat.width / 2, false);

        this.goat.yChange = Math.max(this.goat.yChange, Math.abs(this.goat.y - this.goat.yOrig));

        if( this.goat.y > this.cameraYMin + this.game.height && this.goat.alive ) {
            this.music.stop();
            this.state.restart();
        }
    },

    collisionEnemyHandler: function(goat, enemy) {
        enemy.kill();
        this.life -= 1;
        this.updateLife();
    },

    updatePoints: function() {
        this.scoreText.setText(this.points + " / " + this.maxPoints);

        if (this.points >= this.maxPoints) {
            this.music.stop();
            this.game.state.start('FinalState');
        }
    },

    updateLife: function() {
        this.lifeHUD.frame = this.life - 1;

        if (this.life <= 0) {
            this.goat.kill();
            this.music.stop();
            this.state.restart();
        }

    }

};
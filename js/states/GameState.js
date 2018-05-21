var GameState = {

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
        this.maxPoints = 300;

        this.max = 0;
        this.ront_emitter = 0;
        this.mid_emitter = 0;
        this.back_emitter = 0;
        this.update_interval = 4 * 60;
        this.i = 0;
    },

    preload: function() {
        this.load.spritesheet("goat", "assets/goat_jump_sprite.png", 200, 220, 5, 0, 10);
        this.load.spritesheet("bird_monster", "assets/bird_monster.png", 111, 86, 4, 1, 4);
        this.load.image('platform', 'assets/platform_block.png');

        // this.load.image('progress', 'assets/progress.png');
        this.load.image('background', 'assets/background.png');

        this.load.image('snowflakes', 'assets/snowflakes.png');
    },

    create: function() {
        this.stage.backgroundColor = '#b4e3dd';

        this.backgroundCreate();
        this.platformsCreate();
        this.enemiesCreate();
        this.goatCreate();
        // this.setupSnow();

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

        this.physics.arcade.collide(this.goat, this.birds, this.collisionEnemyHandler, null, this);
        this.physics.arcade.collide(this.goat, this.platforms, this.collisionPlataformHandler, null, this);

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
        // this.updateLife();

        // this.i++;
        //
        // if (this.i === this.update_interval) {
        //     this.changeWindDirection();
        //     this.update_interval = Math.floor(Math.random() * 4) * 20; // 0 - 20sec @ 60fps
        //     this.i = 0;
        // }
    },

    // MARK: - Public Methods

    setupHUD: function() {
        // Segunda fase
        // this.lifeText = game.add.text(16, 16, 'Vidas: ' + this.life, { fontSize: '14px', fill: '#000' });
        // this.lifeText.fixedToCamera = true;

        this.scoreText = game.add.text(16, 16, 'Pontuação: 0 / ' + this.maxPoints, { fontSize: '14px', fill: '#000' });
        this.scoreText.fixedToCamera = true;

        // Segunda fase
        // this.progress = this.game.add.sprite(20, this.world.centerY, 'progress');
        // this.progress.anchor.setTo(0.5);
        // this.progress.fixedToCamera = true;
    },

    backgroundCreate: function() {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.fixedToCamera = true;
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

        // Liberar somente na segunda fase

        // var randomOrigin = this.rnd.integerInRange(1, 9);
        // var position = 350;
        //
        // if (randomOrigin % 3 == 0) {
        //     platform.position.x = 300;
        //     position = position * -1;
        // }
        //
        // game.add.tween(platform).to( { x: position }, 30000, Phaser.Easing.Linear.None, true);

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
        }

        this.goat.body.velocity.x = velocity;

        this.world.wrap(this.goat, this.goat.width / 2, false);

        this.goat.yChange = Math.max(this.goat.yChange, Math.abs(this.goat.y - this.goat.yOrig));
        
        if( this.goat.y > this.cameraYMin + this.game.height && this.goat.alive ) {
            this.resetGame();
        }
    },

    collisionPlataformHandler: function(goat, platform, context) {
        // console.log("collisionPlataformHandler");
    },

    collisionEnemyHandler: function(goat, enemy, context) {
        game.state.restart();
    },

    resetGame: function() {
        game.state.restart();
    },

    updatePoints: function() {
        this.scoreText.setText("Pontuação: " + this.points + " / " + this.maxPoints);

        if (this.points >= this.maxPoints) {
            game.state.start('SecondState');
        }
    },

    // updateLife: function() {
    //     this.lifeText.setText("Vidas: " + this.life + " / 3");
    // }

    setupSnow: function() {
        this.back_emitter = game.add.emitter(game.world.centerX, -32, 600);
        this.back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        this.back_emitter.maxParticleScale = 0.6;
        this.back_emitter.minParticleScale = 0.2;
        this.back_emitter.setYSpeed(20, 100);
        this.back_emitter.gravity = 0;
        this.back_emitter.width = game.world.width * 1.5;
        this.back_emitter.minRotation = 0;
        this.back_emitter.maxRotation = 40;

        this.mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
        this.mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        this.mid_emitter.maxParticleScale = 1.2;
        this.mid_emitter.minParticleScale = 0.8;
        this.mid_emitter.setYSpeed(50, 150);
        this.mid_emitter.gravity = 0;
        this.mid_emitter.width = game.world.width * 1.5;
        this.mid_emitter.minRotation = 0;
        this.mid_emitter.maxRotation = 40;

        this.front_emitter = game.add.emitter(game.world.centerX, -32, 50);
        this.front_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        this.front_emitter.maxParticleScale = 1;
        this.front_emitter.minParticleScale = 0.5;
        this.front_emitter.setYSpeed(100, 200);
        this.front_emitter.gravity = 0;
        this.front_emitter.width = game.world.width * 1.5;
        this.front_emitter.minRotation = 0;
        this.front_emitter.maxRotation = 40;

        this.changeWindDirection();

        this.back_emitter.start(false, 14000, 20);
        this.mid_emitter.start(false, 12000, 40);
        this.front_emitter.start(false, 6000, 1000);
    },

    changeWindDirection: function() {

        var multi = Math.floor((this.max + 200) / 4),
            frag = (Math.floor(Math.random() * 100) - multi);
        this.max = this.max + frag;

        if (this.max > 200) this.max = 150;
        if (this.max < -200) this.max = -150;

        this.setXSpeed(this.back_emitter, this.max);
        this.setXSpeed(this.mid_emitter, this.max);
        this.setXSpeed(this.front_emitter, this.max);

    },

    setXSpeed: function(emitter, max) {

        emitter.setXSpeed(max - 20, max);
        emitter.forEachAlive(this.setParticleXSpeed, this, max);

    },

    setParticleXSpeed: function(particle, max) {

        particle.body.velocity.x = max - Math.floor(Math.random() * 30);

    },

};
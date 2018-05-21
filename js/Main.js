var game = new Phaser.Game(400, 800, Phaser.AUTO)
game.state.add("StartGameState", StartGameState);
game.state.add("SecondState", SecondState);
game.state.add("GameState", GameState);

game.state.start("GameState");
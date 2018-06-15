var game = new Phaser.Game(400, 800, Phaser.AUTO)
game.state.add("ThirdState", ThirdState);
game.state.add("SecondState", SecondState);
game.state.add("FirstState", FirstState);
game.state.add("StartState", StartState);
game.state.add("ThirdStartState", StartState);
game.state.add("FinalState", StartState);
game.state.add("SecondStartState", SecondStartState);

game.state.start("StartState");
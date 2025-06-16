import { Game } from "./services/Game";

(function main() {
  const game: Game = new Game();
  console.log("Winner is: ", game.startGame());
})();

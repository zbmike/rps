export default function gameLogic (my, curb) {
    if (my === curb) return {main: "DRAW GAME!", sub: `Curb with ${curb} draws`}
    switch (my) {
        case "rock":
            if (curb === "scissors") return {main: "YOU WIN!", sub: `Curb with ${curb} loses`};
            if (curb === "paper") return {main: "YOU LOST!", sub: `Curb with ${curb} wins`} ;           
            break;
        case "paper":
            if (curb === "rock") return {main: "YOU WIN!", sub: `Curb with ${curb} loses`};
            if (curb === "scissors") return {main: "YOU LOST!", sub: `Curb with ${curb} wins`} ;           
            break;
        case "scissors":
            if (curb === "paper") return {main: "YOU WIN!", sub: `Curb with ${curb} loses`};
            if (curb === "rock") return {main: "YOU LOST!", sub: `Curb with ${curb} wins`} ;           
            break;
        default:
            break;
    }
}
let player = 0;

document.getElementById(0).onclick = function () { game_start(0) };
document.getElementById(1).onclick = function () { game_start(1) };
document.getElementById(2).onclick = function () { game_start(2) };
document.getElementById(3).onclick = function () { game_start(3) };
document.getElementById(4).onclick = function () { game_start(4) };
document.getElementById(5).onclick = function () { game_start(5) };
document.getElementById(7).onclick = function () { game_start(7) };
document.getElementById(6).onclick = function () { game_start(6) };
document.getElementById(8).onclick = function () { game_start(8) };

let control = [[0, 4, 8], [0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

function game_start(num) {
    if (player == 0) {
        if (document.getElementById(num).innerHTML == "") {
            document.getElementById(num).innerHTML = "X";
            player = 1;
            ai_move()
            check_win()
        }
        else if (document.getElementById(num).innerHTML == "X") {
            alert("This place is already taken");
        }
        else if (document.getElementById(num).innerHTML == "O") {
            alert("This place is already taken");
        }
    }
}


function ai_move(depth = 0,) {
    let ai_notdecided = true;
    for (let index = 0; index < 8; index++) {
        if (document.getElementById(control[index][0]).innerHTML == "" && document.getElementById(control[index][1]).innerHTML == "" && document.getElementById(control[index][2]).innerHTML == "") {
            document.getElementById(control[index][Math.floor(Math.random() * 3)]).innerHTML = "O";
            ai_notdecided = false;
            player = 0
            break;
        }
    }
    if (ai_notdecided) {
        for (let index = 0; index < 8; index++) {
            let num = Math.floor(Math.random() * 9);
            if (document.getElementById(num).innerHTML == "") {
                document.getElementById(num).innerHTML = "O";
                player = 0
                break;
            }
        }
    }
}

function check_win() {
    for (let i = 0; i < 8; i++) {
        let check = 0;
        if (document.getElementById(control[i][check]).innerHTML == "X" && document.getElementById(control[i][check + 1]).innerHTML == "X" && document.getElementById(control[i][check + 2]).innerHTML == "X") {
            alert("X wins");
            break;
        }
        if (document.getElementById(control[i][check]).innerHTML == "O" && document.getElementById(control[i][check + 1]).innerHTML == "O" && document.getElementById(control[i][check + 2]).innerHTML == "O") {
            alert("0 wins");
            break;
        }
    }
}


/* function ai_move(depth = 0,) {
    let ai_notdecided = true;
    for (let index = 0; index < 8; index++) {
        if (document.getElementById(control[index][0]).innerHTML == "" && document.getElementById(control[index][1]).innerHTML == "" && document.getElementById(control[index][2]).innerHTML == "") {
            document.getElementById(control[index][Math.floor(Math.random() * 3)]).innerHTML = "O";
            ai_notdecided = false;
            player = 0
            break;
        }
    }
    if (ai_notdecided) {
        for (let index = 0; index < 8; index++) {
            let num = Math.floor(Math.random() * 9);
            if (document.getElementById(num).innerHTML == "") {
                document.getElementById(num).innerHTML = "O";
                player = 0
                break;
            }
        }
    }
} */
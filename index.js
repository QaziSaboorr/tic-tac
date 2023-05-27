$(document).ready(function () {
  let numberOfturns = 0;
  let won = false;
  let x = true;
  let o = false;
  let arrayRecord = [];
  let firstturn = true;
  let ok = false;

  let player1 = {
    name: "PLayer 1",
    score: 0,
    turn: true,
  };
  let player2 = {
    name: "PLayer 2",
    score: 0,
    turn: false,
  };
  let tie = 0;
  $("#start").click(function (event) {
    if ($("#dropdown1").val() != $("#dropdown2").val()) {
      event.preventDefault();
      $("#form").fadeOut(2000);
      setTimeout(() => {
        $("#game").hide();
        $("#game").fadeIn(2000);
        $("#reload").fadeIn(2000);
        $("#game").css("display", "grid");
        $("#scoretracker1").fadeIn(2000);
        $("#scoretracker2").fadeIn(2000);
        $("#tie").fadeIn(2000);
        $("#scoretracker1").css("display", "block");
        $("#scoretracker2").css("display", "block");
        player1.name = $("#name1").val();
        player2.name = $("#name2").val();
        if ($("#name1").val() === "") {
          player1.name = "Player 1";
        }
        if ($("#name2").val() === "") {
          player2.name = "Player 2";
        }

        $("#fun").text(player1.name + "'s turn");

        if ($("#dropdown2").val() === "X") {
          console.log($("#dropdown2").val());
          x = false;
          o = true;
          if ($("#name1").val() === "") {
            player2.name = "Player 1";
          }
          if ($("#name2").val() === "") {
            player1.name = "Player 2";
          } else {
            player2.name = $("#name1").val();
            player1.name = $("#name2").val();
          }
        }
        let para = paragraph();
        $("#scoretracker1").text(para);
      }, 3000);
    } else {
      alert("Two people cant choose same Letter");
    }
  });

  start();

  $("#restart").click(function () {
    numberOfturns = 0;
    $("#fun").text("");
    won = false;
    arrayRecord = [];

    for (let i = 0; i < 9; i++) {
      $("#" + i.toString()).empty();
      console.log(i.toString());
      $("#" + i.toString()).css("background", "red");
    }
    if (x === true) {
      x = false;
      o = true;

      $("#fun").text(player1.name + "'s turn");
      let temp = player2;
      player2 = player1;
      player1 = temp;
    } else {
      x = true;
      o = false;
      $("#fun").text(player2.name + "'s turn");

      let temp = player1;
      player1 = player2;
      player2 = temp;
    }
    start();
  });
  function start() {
    if (won == false) {
      $(".boxes").click(function () {
        if (x === true && won == false) {
          let idx = $(this).attr("id");
          let idxtransform = `#` + idx;
          if (!$(idxtransform).text()) {
            o = true;
            x = false;
            !$(idxtransform).text("x");
            arrayRecord[parseInt(idx)] = "x";
            numberOfturns++;

            $("#fun").text(player2.name + "'s turn");
            check("x", player1);
          }
        } else if (o === true && won == false) {
          let ido = $(this).attr("id");
          let idotransform = `#` + ido;
          if (!$(idotransform).text()) {
            x = true;
            o = false;
            $(idotransform).text("o");
            arrayRecord[parseInt(ido)] = "o";
            numberOfturns++;
            $("#fun").text(player1.name + "'s turn");
            check("o", player2);
          }
        }
      });
    }
  }

  function check(letter, player) {
    if (
      arrayRecord[0] === letter &&
      arrayRecord[1] === letter &&
      arrayRecord[2] === letter
    ) {
      won = true;

      $("#0").css("background", "blue");
      $("#1").css("background", "blue");
      $("#2").css("background", "blue");
    } else if (
      arrayRecord[3] === letter &&
      arrayRecord[4] === letter &&
      arrayRecord[5] === letter
    ) {
      won = true;
      $("#3").css("background", "blue");
      $("#4").css("background", "blue");
      $("#5").css("background", "blue");
    } else if (
      arrayRecord[6] === letter &&
      arrayRecord[7] === letter &&
      arrayRecord[8] === letter
    ) {
      $("#6").css("background", "blue");
      $("#7").css("background", "blue");
      $("#8").css("background", "blue");
      won = true;
    } else if (
      arrayRecord[0] === letter &&
      arrayRecord[4] === letter &&
      arrayRecord[8] === letter
    ) {
      $("#0").css("background", "blue");
      $("#4").css("background", "blue");
      $("#8").css("background", "blue");
      won = true;
    } else if (
      arrayRecord[2] === letter &&
      arrayRecord[4] === letter &&
      arrayRecord[6] === letter
    ) {
      $("#2").css("background", "blue");
      $("#4").css("background", "blue");
      $("#6").css("background", "blue");
      won = true;
    } else if (
      arrayRecord[0] === letter &&
      arrayRecord[3] === letter &&
      arrayRecord[6] === letter
    ) {
      $("#0").css("background", "blue");
      $("#3").css("background", "blue");
      $("#6").css("background", "blue");
      won = true;
    } else if (
      arrayRecord[1] === letter &&
      arrayRecord[4] === letter &&
      arrayRecord[7] === letter
    ) {
      $("#1").css("background", "blue");
      $("#4").css("background", "blue");
      $("#7").css("background", "blue");
      won = true;
    } else if (
      arrayRecord[2] === letter &&
      arrayRecord[5] === letter &&
      arrayRecord[8] === letter
    ) {
      $("#2").css("background", "blue");
      $("#5").css("background", "blue");
      $("#8").css("background", "blue");
      won = true;
    }
    if (numberOfturns === 9 && won === false) {
      tie++;
      $("#fun").text("Its a tie.");
      $("#tie").text("Tie: " + tie);
      $("#restart").css("display", "block");
    }

    if (won === true) {
      $("#fun").text(player.name + " Won");
      $("#restart").css("display", "block");
      ++player.score;

      $("#scoretracker1").text(paragraph());
    }
  }

  $("#reload").click(() => {
    location.reload();
  });

  function paragraph() {
    return `${player1.name} score : ${player1.score}  ${player2.name} score : ${player2.score}`;
  }
});

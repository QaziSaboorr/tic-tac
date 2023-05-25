$(document).ready(function () {
  let x = true;
  let o = false;
  let arrayRecord = [];
  let numberOfturns = 0;
  let player1 = "Player 1";
  let player2 = "Player 2";
  let won = false;
  let player1score = 0;
  let player2score = 0;
  $("#start").click(async function (event) {
    if ($("#dropdown1").val() != $("#dropdown2").val()) {
      event.preventDefault();
      $("#form").fadeOut(2000);
      setTimeout(() => {
        $("#game").hide();
        $("#game").fadeIn(2000);
        $("#game").css("display", "grid");
        $("#scoretracker1").css("display", "block");
        $("#scoretracker2").css("display", "block");
        player1 = $("#name1").val();
        player2 = $("#name2").val();
        if ($("#name1").val() === "") {
          player1 = "Player 1";
        }
        if ($("#name2").val() === "") {
          player2 = "Player 2";
        }

        $("#fun").text(player1 + "'s turn");
        if ($("#dropdown2").val() == "X") {
          x = false;
          o = true;
          player2 = $("#name1").val();
          player1 = $("#name2").val();
        }
        $("#scoretracker1").text(player1 + " score: " + player1score);
        $("#scoretracker2").text(player2 + " score: " + player2score);
      }, 3000);

      $(".boxes").click(function () {
        if (x === true) {
          let idx = $(this).attr("id");
          let idxtransform = `#` + idx;
          if (!$(idxtransform).text()) {
            o = true;
            x = false;
            !$(idxtransform).text("x");
            arrayRecord[parseInt(idx)] = "x";
            numberOfturns++;
            $("#fun").text(player2 + "'s turn");
            check("x", player1, player1score);
          }
        } else if (o === true) {
          let ido = $(this).attr("id");
          let idotransform = `#` + ido;
          if (!$(idotransform).text()) {
            x = true;
            o = false;
            $(idotransform).text("o");
            arrayRecord[parseInt(ido)] = "o";
            numberOfturns++;
            $("#fun").text(player1 + "'s turn");
            check("o", player2, player2score);
          }
        }
      });

      function check(letter, player, playerscore) {
        if (numberOfturns === 9 && won === false) {
          $("#fun").text("Its a tie.");
        } else if (
          arrayRecord[0] === letter &&
          arrayRecord[1] === letter &&
          arrayRecord[2] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[3] === letter &&
          arrayRecord[4] === letter &&
          arrayRecord[5] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[6] === letter &&
          arrayRecord[7] === letter &&
          arrayRecord[8] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[0] === letter &&
          arrayRecord[4] === letter &&
          arrayRecord[8] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[2] === letter &&
          arrayRecord[4] === letter &&
          arrayRecord[6] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[0] === letter &&
          arrayRecord[3] === letter &&
          arrayRecord[6] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[1] === letter &&
          arrayRecord[4] === letter &&
          arrayRecord[7] === letter
        ) {
          won = true;
        } else if (
          arrayRecord[2] === letter &&
          arrayRecord[5] === letter &&
          arrayRecord[8] === letter
        ) {
          won = true;
        }

        if (won === true) {
          $("#fun").text(player + " Won");
          $("#restart").css("display", "block");
          playerscore++;
        }
      }
    } else {
      event.preventDefault();
      alert("Two Players cannot choose same letter");
    }
  });

  $("#restart").click();
});

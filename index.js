$(document).ready(function () {
  let numberOfturns = 0;
  let won = false;
  let x = true;
  let o = false;
  let arrayRecord = [];
  let player1 = "Player 1";
  let player2 = "Player 2";

  let player1score = 0;
  let player2score = 0;
  start();

  $("#restart").click(function () {
    numberOfturns = 0;
    $("#fun").text("");
    won = false;
    x = true;
    o = false;
    arrayRecord = [];

    player1score = 0;
    player2score = 0;
    for (let i = 0; i < 9; i++) {
      $("#" + i.toString()).empty();
      console.log(i.toString());
      $("#" + i.toString()).css("background", "red");
    }
    // $("#game").val($("#game").data("originalValue"));
    start();
  });
  function start() {
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

          if ($("#dropdown2").val() === "X") {
            console.log($("#dropdown2").val());
            x = false;
            o = true;
            if ($("#name1").val() === "") {
              player2 = "Player 1";
            }
            if ($("#name2").val() === "") {
              player1 = "Player 2";
            } else {
              player2 = $("#name1").val();
              player1 = $("#name2").val();
            }
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
      } else {
        alert("Two people cant choose same Letter");
      }
    });
  }

  function check(letter, player, playerscore) {
    if (numberOfturns === 9 && won === false) {
      $("#fun").text("Its a tie.");
    } else if (
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

    if (won === true) {
      $("#fun").text(player + " Won");
      $("#restart").css("display", "block");
      playerscore++;
    }
  }
});

// function check(letter, player, playerscore) {
//     if (numberOfturns === 9 && won === false) {
//       $("#fun").text("Its a tie.");
//     } else if (
//       arrayRecord[0] === letter &&
//       arrayRecord[1] === letter &&
//       arrayRecord[2] === letter
//     ) {
//       won = true;

//       $("#0").css("background", "blue");
//       $("#1").css("background", "blue");
//       $("#2").css("background", "blue");
//     } else if (
//       arrayRecord[3] === letter &&
//       arrayRecord[4] === letter &&
//       arrayRecord[5] === letter
//     ) {
//       won = true;
//       $("#3").css("background", "blue");
//       $("#4").css("background", "blue");
//       $("#5").css("background", "blue");
//     } else if (
//       arrayRecord[6] === letter &&
//       arrayRecord[7] === letter &&
//       arrayRecord[8] === letter
//     ) {
//       $("#6").css("background", "blue");
//       $("#7").css("background", "blue");
//       $("#8").css("background", "blue");
//       won = true;
//     } else if (
//       arrayRecord[0] === letter &&
//       arrayRecord[4] === letter &&
//       arrayRecord[8] === letter
//     ) {
//       $("#0").css("background", "blue");
//       $("#4").css("background", "blue");
//       $("#8").css("background", "blue");
//       won = true;
//     } else if (
//       arrayRecord[2] === letter &&
//       arrayRecord[4] === letter &&
//       arrayRecord[6] === letter
//     ) {
//       $("#2").css("background", "blue");
//       $("#4").css("background", "blue");
//       $("#6").css("background", "blue");
//       won = true;
//     } else if (
//       arrayRecord[0] === letter &&
//       arrayRecord[3] === letter &&
//       arrayRecord[6] === letter
//     ) {
//       $("#0").css("background", "blue");
//       $("#3").css("background", "blue");
//       $("#6").css("background", "blue");
//       won = true;
//     } else if (
//       arrayRecord[1] === letter &&
//       arrayRecord[4] === letter &&
//       arrayRecord[7] === letter
//     ) {
//       $("#1").css("background", "blue");
//       $("#4").css("background", "blue");
//       $("#7").css("background", "blue");
//       won = true;
//     } else if (
//       arrayRecord[2] === letter &&
//       arrayRecord[5] === letter &&
//       arrayRecord[8] === letter
//     ) {
//       $("#2").css("background", "blue");
//       $("#5").css("background", "blue");
//       $("#8").css("background", "blue");
//       won = true;
//     }

//     if (won === true) {
//       $("#fun").text(player + " Won");
//       $("#restart").css("display", "block");
//       playerscore++;
//     }
//   }
// } else {
//   event.preventDefault();
//   alert("Two Players cannot choose same letter");
// }
// });

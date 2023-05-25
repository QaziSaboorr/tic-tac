$(document).ready(function () {
  let x = true;
  let o = false;
  let arrayRecord = [];
  let numberOfturns = 0;
  let player1 = "Unknown";
  let player2 = "Unkown";

  $("#start").click(function (event) {
    // event.preventDefault();
    $("#form").hide();
    $("#game").css("display", "grid");

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
          check("x");
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
          check("o");
        }
      }
    });

    function check(letter) {
      if (numberOfturns === 9) {
        console.log("Tie");
      } else if (
        arrayRecord[0] === letter &&
        arrayRecord[1] === letter &&
        arrayRecord[2] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[3] === letter &&
        arrayRecord[4] === letter &&
        arrayRecord[5] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[6] === letter &&
        arrayRecord[7] === letter &&
        arrayRecord[8] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[0] === letter &&
        arrayRecord[4] === letter &&
        arrayRecord[8] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[2] === letter &&
        arrayRecord[4] === letter &&
        arrayRecord[6] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[0] === letter &&
        arrayRecord[3] === letter &&
        arrayRecord[6] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[1] === letter &&
        arrayRecord[4] === letter &&
        arrayRecord[7] === letter
      ) {
        console.log("win");
      } else if (
        arrayRecord[2] === letter &&
        arrayRecord[5] === letter &&
        arrayRecord[8] === letter
      ) {
        console.log("win");
      }
    }
  });
});

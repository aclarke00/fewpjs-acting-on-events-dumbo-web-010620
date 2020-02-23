let dodger = document.querySelector("#dodger")

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }


  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }

  document.addEventListener("keydown", function(e) {
      if (e.key === "ArrownLeft") {
          moveDodgerLeft()
      }
  })

  document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight") {
          moveDodgerRight()
      }
  })
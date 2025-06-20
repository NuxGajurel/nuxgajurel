

  function toggleText() {
      let moreText = document.querySelector('.more-text');
      let btnText = document.querySelector('.btn');

      if (moreText.style.display === "none") {
          moreText.style.display = "inline";
          btnText.innerHTML = "See Less";
      } else {
          moreText.style.display = "none";
          btnText.innerHTML = "See More";
      }
  }




  
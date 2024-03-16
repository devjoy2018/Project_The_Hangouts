document.getElementById('bookNowBtn').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'block';
  setTimeout(function () {
    closePopup();
  }, 5000);
});

// displaying the pop up block

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
});

// closing pop up on click

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

// closing popup on escape

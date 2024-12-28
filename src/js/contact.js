import 'rverify';

RVerify.configure({
  album: [
    './img/verify-1.jpg'
  ]
});

RVerify.configure({
  title: "Verify Human",
  text: "Rotate image right-side up"
});

RVerify.action(function (code) {
  switch (code) {
    case 1:
      document.getElementById('contact-card').innerHTML = "<p>devlin.junker@gmail.com</p><p>(541)-250-0338</p><p>Portland, OR</p>"
      document.getElementById('contact-card').classList.remove("hidden");
      break;
    case 1:
      alert("Verify fail?");
      break;
    case 2:
      history.back()
      break;
  }
});
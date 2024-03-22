$(function () {
  $("#change-color").on('click', function() {
    $("#target").css("color","red")
  });
$(function () {
  $("#change-text").on('click', function() {
    $("#target").css("color","red")
    $("#target").text("Hello")
  });
});
$(function () {
  $("#fade-out").on('click', function() {
    $("#target").fadeOut();
  });
  $("#fade-in").on('click', function() {
    // フェードインする
    $("#target").fadeIn();
  });
});
});

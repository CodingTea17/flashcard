$(document).ready(function() {
//   $("button#next").click(function() {
//     // $(".flashcard:visible").closest('.flashcard').nextAll(".flashcard");
//     $('.flashcard:visible').slideUp().closest('.flashcard').nextAll('.flashcard').eq(0).delay(500).slideDown();
//   });
// });
  $('#next').click(function () {
      $('.flashcard:visible').slideUp().closest('.flashcard').nextAll('.flashcard').eq(0).slideDown();
      $('.answer').hide();
  });

  $('#prev').click(function () {
      $('.flashcard:visible').slideUp().closest('.flashcard').prevAll('.flashcard').eq(0).slideDown();
      $('.answer').hide();
  });

  $('#show').click(function () {
    $('.answer').toggle();
    // $('.answer').css('color', 'black');
  });
});

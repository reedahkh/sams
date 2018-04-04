$(document).ready(function() {
    //testimonial carousel
    $(".testimonial-carousel").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6000,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
    });

        
    // features card toggle
    $(".card_container").mouseover(function(){
        $(this).find(".side_2").show ()
    });
    $(".card_container").mouseleave(function(){
        $(this).find(".side_2").hide();
    });

});
// calendar
if ($("#fullCalendar").length) {
    var calendar, d, date, m, y;

    date = new Date();

    d = date.getDate();

    m = date.getMonth();

    y = date.getFullYear();

    calendar = $("#fullCalendar").fullCalendar({
       
        header: {
            left: "prev,next today",
            center: "title",
            right: "month,agendaWeek,agendaDay"
        },
      height:420,
      selectable: true,
      showNonCurrentDates :false,
      selectHelper: true,
      select: function select(start, end, allDay) {
        var title;
        title = prompt("Event Title:");
        if (title) {
          calendar.fullCalendar("renderEvent", {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          }, true);
        }
        return calendar.fullCalendar("unselect");
      },
      editable: true,
      events: [ {
        title: "Company Lunch",
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d + 2, 14, 0),
        allDay: false
      }]
    });
  }

// select table

$(".status_select").click(function(e){
    console.log(e.target.value);

    if( (e.target.value) == 'pending') {

        $(".status_select").addClass('text-danger')
    }
    if( (e.target.value) == 'approved') {

        $(".status_select").removeClass('text-danger')
        
        $(".status_select").addClass('text-success');
    }
})
            

           
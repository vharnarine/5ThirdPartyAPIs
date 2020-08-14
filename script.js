$(document).ready(function(){

    let currentDay = $("#currentDay");
    let schedulingEvents = $(".schedule");
    let timeBlocks = $(".time-rows");
    let currentDate = moment().format("dddd, MMMM Do");
    let currentHour = moment().format("H");
    let events = [];
    
    // Storing user input to local storage
    $("*[data-store]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
      });
      $("#saveButton1").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea1").attr("data-store"), textarea1.value);
      });
      $("#saveButton2").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea2").attr("data-store"), textarea2.value);
      });
      $("#saveButton3").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea3").attr("data-store"), textarea3.value);
      });
      $("#saveButton4").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea4").attr("data-store"), textarea4.value);
      });
      $("#saveButton5").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea5").attr("data-store"), textarea5.value);
      });
      $("#saveButton6").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea6").attr("data-store"), textarea6.value);
      });
      $("#saveButton7").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea7").attr("data-store"), textarea7.value);
      });
      $("#saveButton8").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea8").attr("data-store"), textarea8.value);
      });
      $("#saveButton9").on("click", function () {
        localStorage.setItem ("item-" + $("#textarea9").attr("data-store"), textarea9.value);
      });
    
    //Set up the blank rows on the page & change row colors depending on time
    function setUpRows(){
      timeBlocks.each(function(){
      let thisRow = $(this);
      let thisRowHr = parseInt(thisRow.attr("data-hour"));
    
      // change row colors to identify where we are in the day
      if (thisRowHr == currentHour) {
        thisRow.addClass("present").removeClass("past future");
      }
      if (thisRowHr < currentHour) {
        thisRow.addClass("past").removeClass("present future");
      }
      if (thisRowHr > currentHour) {
        thisRow.addClass("future").removeClass("past present");
      }
    });
    }
    setUpRows();
    
    
     //initialize the array of objects
    if(!localStorage.getItem("todos")){
    }
    
    //display current date
    currentDay.text(currentDate);
    
    // //render schedule from local storage
    renderSchedule();
    //save button on click functionality
    schedulingEvents.on("click", "button", saveIt);
    });
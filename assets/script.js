//display current day on page
$("#currentDay").text("It's " + moment().format("dddd, MMMM Do YYYY"))

var saveBtn = $(".saveBtn")

$(saveBtn).on("click", function () {
    var time = $(this).siblings(".hour").text().trim()
    var gamePlan = $(this).siblings(".work-input").text().trim()

    localStorage.setItem(time, gamePlan)
    console.log(localStorage)
})
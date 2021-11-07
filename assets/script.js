//display current day on page
$("#currentDay").text("It's " + moment().format("dddd, MMMM Do YYYY") + "!")



var saveBtn = $(".saveBtn")


$(saveBtn).on("click", function () {
        
    var time = $(this).parent().attr("id")
    var workInput = $(this).siblings(".input").val()

    localStorage.setItem(time, workInput)
    console.log(localStorage)

})

$("#8am .input").val(localStorage.getItem("8am"))
$("#9am .input").val(localStorage.getItem("9am"))
$("#10am .input").val(localStorage.getItem("10am"))
$("#11am .input").val(localStorage.getItem("11am"))
$("#12pm .input").val(localStorage.getItem("12pm"))
$("#1pm .input").val(localStorage.getItem("1pm"))
$("#2pm .input").val(localStorage.getItem("2pm"))
$("#3pm .input").val(localStorage.getItem("3pm"))
$("#4pm .input").val(localStorage.getItem("4pm"))
$("#5pm .input").val(localStorage.getItem("5pm"))

function blockColor() {
    var hour = moment().hours()

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"))

        if(currentHour > hour) {
            $(this).addClass("future")

        } else if(currentHour === hour) {
            $(this).addClass("present")

        } else {
            $(this).addClass("past")
        }
        

    })
}

blockColor()
console.log(blockColor)
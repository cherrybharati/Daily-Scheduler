// let currentTime = moment().format("H")
// let todaysDate = moment().format('[Today is ]')

// $("btn-9").on("click", function (){
//     $("#9").append($("<li>" + $("#input9").val() + "<li>"));
//     $("#input9").val('')
// }
// )







// $(".saveBtn").on("click", function(){
//     // Pull value from the textare of chosen save button. This will serve as the value for out setItem
//     var value

//     // Pull the id of the clicked element to serve as the id
//     var time

//     // This is where you will save the data to local storage
//     localStorage.setItem()
// })


// // Function to update the color of the time display
// function hourUpdater() {
//     var currentTime = moment().hours()

//     // pull the id from each id within the time columns
//     var block = 

//     $(".time-block").each(function(){

//         // take the value frome each id and setting to the variable block. HINT parseInt
//         var block = $()

//         // if statments to ask: Is the current time before the block? after the block or equal to the block

//         // in each if statement you will need to add a class and remove a class
//         if(block < currentTime) {
//             // add the class of past to that element

//         }

//     })

// }


// hourUpdater()

// var interval = setInterval(hourUpdater, 15000);


// // here we need to access the values from localstorage and GET the times to display them on screen
// $(".hour-9")
var START_HOUR = 8, END_HOUR = 17;
// var Container = $(".container")
var Container = document.getElementsByClassName('container')[0]
var currentHour = parseInt(moment().format("H"))

for (var i = START_HOUR; i <= END_HOUR; i++) {
    row(i)
}

function row(val) {
    var timeClass = "past";
    var display = moment(val, "H").format("hA")

    if (val === currentHour) {
        timeClass = "present"
    } else if (val > currentHour) {
        timeClass = "future"
    }

    var parent = document.createElement('div')
    parent.classList.add("row", "time-block")
    // var parent = $("<div>").addClass("row time-block")

    var timeEl = document.createElement('div')
    timeEl.classList.add("col-2", "hour")
    timeEl.textContent = display
    //var timeEl = $("<div>").addClass("col-2 hour").text(display)

    var textarea = document.createElement('textarea')
    textarea.classList.add("col-8", "description", timeClass)
    // var textarea = $("<textarea>")
    //     .addClass("col-8 description")
    //     .addClass(timeClass)

    var saveBtn = document.createElement('button')
    saveBtn.classList.add("col-2", "saveBtn")
    saveBtn.addEventListener("click", save)
    // var saveBtn = $("<button>").addClass("col-2 saveBtn").click(save)

    var icon = document.createElement('i')
    icon.classList.add("fas", "fa-save")
    //var icon = $("<i>").addClass("fas fa-save")

    saveBtn.appendChild(icon)
    parent.appendChild(timeEl)
    parent.appendChild(textarea)
    parent.appendChild(saveBtn)
    Container.appendChild(parent)
    // saveBtn.append(icon)
    // parent.append(timeEl, textarea, saveBtn)
    // Container.append(parent)
}

function save() {
    var text = this.previousSibling
    var time = text.previousSibling
    // var siblings = $(this).siblings()
    // var time = $(siblings[0]).text()
    // var text = $(siblings[1]).val()

    console.log(time.textContent, text.value)
}
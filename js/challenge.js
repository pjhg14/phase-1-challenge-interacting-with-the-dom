//Bind DOM Objects to variables---------------------------------->>
//Inverter variable
let stopped = false
//As a user, I should see the timer increment every second once the page has loaded.------------------------------//
let inter = setInterval(counterStart, 1000)
//----------------------------------------------------------------------------------------------------------------//

//Buttons---------------------------------------------------------------------------------------------------------//
let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")

//Likes List
let likes = document.querySelector(".likes")

//Comments (put a paragraph inside the comment when submitted)
let comments = document.querySelector("#list")
let cmmtForm = document.querySelector("#comment-form")
let submit = document.querySelector("#submit")
//--------------------------------------------------------------->>

//Functions-------------------------------------------------------------------------------------------------------//
function counterStart() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function toggleButtons() {
    minus.disabled = stopped
    plus.disabled = stopped
    heart.disabled = stopped
    submit.disabled = stopped
}

function nLToArray(nodeList) {
    let ary = []

    nodeList.forEach(element => {
        ary.push(element)
    });

    return ary
}
//----------------------------------------------------------------------------------------------------------------//

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.-----------------//
minus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1
})

plus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1
})
//----------------------------------------------------------------------------------------------------------------//

//As a user, I can 'like' an individual number of the counter. 
//I should see the count of the number of 'likes' associated with that number displayed.--------------------------//
heart.addEventListener("click", () => {
    //Check if the current number on the counter is liked already
    let likesList = likes.querySelectorAll("li")
    let li = nLToArray(likesList).find((element) => element.id === counter.innerText)

    if (!!li) {         //if an li with the number is found, increment the amount of times the number has been liked (in between script tags)
        //find the span of the li
        let span = li.querySelector("span")
        span.innerText = parseInt(span.innerText) + 1
    } else {    //if not found, create new 'liked' li (content, span, more content)
        li = document.createElement("li")
        let newSpan = document.createElement("span")
        newSpan.innerText = "1"

        li.id = counter.innerText
        li.append(`${counter.innerText} has been liked `,newSpan, " times")

        likes.append(li)
    }

    
})
//----------------------------------------------------------------------------------------------------------------//

//As a user, I can pause the counter, which should:
    //pause the counter
    //disable all buttons except the pause button
    //switch the label on the button from "pause" to "resume"
    
//As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.-----//
pause.addEventListener("click", () => {
    if(stopped) {
        inter = setInterval(counterStart, 1000)
        pause.value = "pause"
    } else {
        clearInterval(inter)
        pause.value = "resume"
    }

    stopped = !stopped
    toggleButtons()
})
//----------------------------------------------------------------------------------------------------------------//


//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."------------------------//
cmmtForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let selection = event.target.querySelector("#comment-input")
    let newP = document.createElement("p")
    newP.innerText = selection.value

    comments.append(newP)
})
//----------------------------------------------------------------------------------------------------------------//


//Temp interval clear (so I don't have the thing timing me all of the time >:( )
//clearInterval(inter)
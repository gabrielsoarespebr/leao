class Activity {
    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
    }
}

const emojis = ["&#128527;", "&#128528;", "&#128556;", "&#129327;"];

window.addEventListener("DOMContentLoaded", function () {
    const codeLetters = ["l", "e", "a", "o"];

    codeLetters.forEach(letter => {
        const addActivityBtn = document.querySelector(`.code-${letter} .addActivityBtn`);
        console.log(addActivityBtn);
        // const activityTitle = document.querySelector(`.code-${letter} .activityTitle`);
        // const activityPriority = document.querySelector(`.code-${letter} .activityPriority`);
        // const activityList = document.querySelector(`.code-${letter} .activityList`);

        // addActivityBtn.addEventListener("click", function (e) {
        //     console.log(e);
        // })

    })
})
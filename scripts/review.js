function renderReviewOutput(){
    const reviewOutput = JSON.parse(window.localStorage.getItem("reviewOutput")) || [];
    const reviewOutputEl = document.getElementById("reviewOutput");
    reviewOutputEl.innerHTML = "";
    for (const review of reviewOutput) {
        const reviewEl = document.createElement("div");
        const { reviewField, fullName} = review;
        reviewEl.innerHTML = reviewField  + "<h3>" + fullName + "</h3>";
        reviewOutputEl.appendChild(reviewEl);
        }
    }

function reviewForm(event){
    event.preventDefault();

    const reviewField = document.querySelector("[name='reviewField']").value;
    const fullName = document.querySelector("[name='fullName']").value;

    const review = {reviewField, fullName};

    const reviewOutput = JSON.parse(window.localStorage.getItem("reviewOutput")) || [];
    reviewOutput.push(review);
    window.localStorage.setItem("reviewOutput", JSON.stringify(reviewOutput));
    renderReviewOutput();

    event.target.reset();
}

    window.addEventListener("storage", function(event){
        if (event.key === "renderReviewOutput") {
            renderReviewOutput;
        }
    });
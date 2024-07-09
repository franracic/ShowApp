let reviewList = loadFromLocalStorage();

function loadFromLocalStorage() {
  const reviewListString = localStorage.getItem("reviews");
  const reviewList = JSON.parse(reviewListString);
  if (!reviewList) {
    return [];
  }
  return reviewList;
}

function saveToLocalStorage(reviewList) {
  const reviewListString = JSON.stringify(reviewList);
  localStorage.setItem("reviews", reviewListString);
}

function createReview(review) {
  const reviewCard = document.createElement("div");
  reviewCard.className = "reviewCard";

  const reviewMessage = document.createElement("pre");
  reviewMessage.innerHTML = review.message;
  reviewCard.appendChild(reviewMessage);

  const reviewRating = document.createElement("p");
  reviewRating.innerHTML = review.rating + "/5";
  reviewRating.className = "reviewRating";
  reviewCard.appendChild(reviewRating);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Remove";
  deleteButton.className = "deleteButton";
  deleteButton.dataset.message = review.message;
  deleteButton.dataset.rating = review.rating;
  reviewCard.appendChild(deleteButton);
  return reviewCard;
}

function renderReviews() {
  const reviews = document.getElementById("reviews");
  reviews.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      deleteReview(event.target.dataset.message, event.target.dataset.rating);
    }
  });
  reviewList.forEach((review) => {
    reviews.appendChild(createReview(review));
  });
  calculateAverageRating();
  saveToLocalStorage(reviewList);
}

const addReview = () => {
  const reviewInput = document.getElementById("reviewInput");
  const ratingInput = document.querySelector('input[name="rating"]:checked');
  if (!ratingInput || !ratingInput.value) {
    alert("Please enter a rating");
    return;
  }
  if (ratingInput.value < 1 || ratingInput.value > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }
  const newReview = {
    message: reviewInput.value || "",
    rating: ratingInput.value,
  };
  reviewList.push(newReview);
  const reviews = document.getElementById("reviews");
  reviews.prepend(createReview(newReview));
  reviewInput.value = "";
  ratingInput.value = "";
};

const calculateAverageRating = () => {
  let ratingSum = 0;
  reviewList.forEach((review) => {
    ratingSum += parseInt(review.rating);
  });
  const avgReviewRating = document.getElementById("avgReviewRating");
  if (!reviewList.length) {
    avgReviewRating.innerHTML = "No reviews";
  } else {
    const averageRating = (ratingSum / reviewList.length).toFixed(2);
    avgReviewRating.innerHTML = averageRating + "/5";
  }
  return averageRating;
};

const deleteReview = (message, rating) => {
  reviewList = reviewList.filter((r) => {
    return message !== r.message || rating !== r.rating;
  });
  const reviewCards = document.querySelectorAll(".reviewCard");
  reviewCards.forEach((card) => {
    if (card.innerHTML.includes(message) && card.innerHTML.includes(rating)) {
      card.remove();
    }
  });
};

renderReviews();

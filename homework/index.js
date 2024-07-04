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

reviewList = [];
reviewList = loadFromLocalStorage();

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
  deleteButton.onclick = () => {
    deleteReview(review);
  };
  reviewCard.appendChild(deleteButton);
  return reviewCard;
}

function renderReviews() {
  const reviews = document.getElementById("reviews");
  reviews.innerHTML = "";
  reviewList.forEach((review) => {
    reviews.appendChild(createReview(review));
  });
  calculateAverageRating();
  saveToLocalStorage(reviewList);
}

const addReview = () => {
  const reviewInput = document.getElementById("reviewInput");
  const ratingInput = document.querySelector('input[name="rating"]:checked');
  if (!ratingInput.value) {
    alert("Please enter a rating");
    return;
  }
  if (ratingInput.value < 1 || ratingInput.value > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }
  const newReview = { message: reviewInput.value, rating: ratingInput.value };
  reviewList.push(newReview);
  renderReviews();
  reviewInput.value = "";
  ratingInput.value = "";
};

const calculateAverageRating = () => {
  let ratingSum = 0;
  reviewList.forEach((review) => {
    ratingSum += parseInt(review.rating);
  });
  const averageRating = (ratingSum / reviewList.length).toFixed(2);

  const avgReviewRating = document.getElementById("avgReviewRating");
  avgReviewRating.innerHTML = averageRating + "/5";

  return averageRating;
};

const deleteReview = (review) => {
  reviewList = reviewList.filter((r) => {
    return review !== r;
  });
  renderReviews();
};

renderReviews();

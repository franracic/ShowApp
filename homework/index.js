let reviewList = [
  { message: "This is a great show", rating: 5 },
  { message: "This is a terrible show", rating: 1 },
];

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
  return reviewCard;
}

function renderReviews() {
  const reviews = document.getElementById("reviews");
  reviews.innerHTML = "";
  reviewList.forEach((review) => {
    reviews.appendChild(createReview(review));
  });
}

const addReview = () => {
  const reviewInput = document.getElementById("reviewInput");
  const ratingInput = document.getElementById("ratingInput");
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

renderReviews();

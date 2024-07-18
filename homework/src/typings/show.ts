export interface IShow {
  title: string;
  description: string;
  average_rating?: number;
  image_url?: string;
  id: string;
  no_of_reviews?: number;
}

export interface IReview {
  user: {
    email: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  id: string;
}

export interface INewReview {
  rating: number;
  comment: string;
  show_id: string;
}

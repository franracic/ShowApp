export interface IShow {
  title: string;
  description: string;
  average_rating?: number;
  image_url?: string;
  id?: string;
  no_of_reviews?: number;
	
}

export interface IReview {
  email: string;
  avatar?: string;
  rating: number;
  comment: string;
}
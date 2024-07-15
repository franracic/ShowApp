export interface IShow {
  title: string;
  description: string;
  averageRating?: number;
  imageUrl?: string;
}

export interface IReview {
  email: string;
  avatar?: string;
  rating: number;
  comment: string;
}

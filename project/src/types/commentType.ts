type UserType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type CommentType = {
  idOffer: number;
  commentText: string;
  date: string;
  id: number;
  rating: number;
  user: UserType;
};

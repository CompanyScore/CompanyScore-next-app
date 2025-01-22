export type ProfileType = {
  id: number;
  name: string;
  avatar: string;
  position: string;
  description: string;
  comments: string[];
};

export type CommentsResponse = {
  data: CommentType[];
  page: number;
  total: number;
  limit: number;
};

export type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
};

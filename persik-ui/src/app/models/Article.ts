export interface Article {
  id: number;
  title: string;
  content: string;
  view: number;
  upvote: number;
  downvote: number;
  publicDate: string;
  modifyDate: string;
  thumbnailImage: string;
  isApproved: boolean;
  isAnonymous: boolean;
  username: string;
  tag: number;
}
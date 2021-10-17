export interface Comment {
  id: number;
  publicDate: string;
  content: string;
  upvote: number;
  downvote: number;
  replyAmount: number;
  parrentId: number;
}
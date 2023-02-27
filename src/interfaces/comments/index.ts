export interface ICommentRequest {
  content: string;
}

export interface IComment extends ICommentRequest {
  id: string;
  createdAt: string;
}

export interface Comment {
  commentId: string,
  content: string,
  userId: string,
  parentCommentId: string,
  children: Comment[];
}

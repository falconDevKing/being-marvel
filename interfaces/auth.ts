export interface AuthUserData {
  identities?: string;
  email_verified?: boolean;
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
}

export interface UserDetails {
  id?: string;
  customId?: string;
  name?: string;
  email?: string;
  image?: string;
  provider?: string;
  firstName?: string;
  lastName?: string;
  postLikes?: string;
  commentLikes?: string;
  blogger?: string;
  userBlogId?: string;
  createdAt?: string;
  updatedAt?: string;
}

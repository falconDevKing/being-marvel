export interface AuthUserData {
  email?: string;
  email_verified?: string;
  identities?: string;
  family_name?: string;
  given_name?: string;
  name?: string;
  picture?: string;
  sub?: string;
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
  postLikes?: string[];
  commentLikes?: string[];
  blogger?: string;
  userBlogId?: string;
  createdAt?: string;
  updatedAt?: string;
}

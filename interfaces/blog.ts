export interface BlogInterface {
  id?: string;
  name?: string;
  logo?: string;
  darkLogo?: string;
  subscriber?: string[];
  userId?: string;
}

export interface AboutInterface {
  id?: string;
  title?: string;
  logo?: string;
  content?: string;
  email?: string;
  linkedIn?: string;
  instagram?: string;
  twitter?: string;
  blogId?: string;
}

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

export interface IBlogPost {
  id?: string;
  category?: string;
  title?: string;
  image?: string;
  description?: string;
  captionText?: string;
  captionImage?: string;
  likes?: number;
  views?: number;
  status?: Boolean;
  publishedAt?: string;
  expireAt?: number;
  blogId?: string;
}

export interface IPostSummary {
  id: string;
  category: string;
  title: string;
  description: string;
  descriptionImage: string;
  status: boolean;
  blogId: string;
  publishedAt: string;
  expireAt: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPostStats {
  id: string;
  blogId: string;
  likes: number;
  views: number;
}

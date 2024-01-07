export interface Link {
  id: number;
  url: string;
  title: string;
  description?: string;
  image_source: string;
  created_at: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

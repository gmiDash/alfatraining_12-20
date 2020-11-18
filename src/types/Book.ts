export default interface Book {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: IThumbnail[];
  description?: string;
}

export interface IThumbnail {
  url: string;
  title?: string;
}

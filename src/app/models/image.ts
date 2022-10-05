export interface ImageModel {
  url: string;
  rating: string;
  title: string;
  images: FixedWithImage;
}

export interface FixedWithImage {
  fixed_width: ImageSpecification;
}

export interface ImageSpecification {
  height: number;
  width: number;
  size: number;
  url: string;
}

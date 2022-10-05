import { ImageModel } from './image';

export interface SearchResponseModel {
  data: ImageModel[];
  pagination: PaginationModel;
}

export interface PaginationModel {
  count: number;
  offset: number;
  total_count: number;
}

export interface Response<TItem> {
  currentPageItems: TItem[];
  currentPageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalItemsCount: number;
  totalPagesCount: number;
}

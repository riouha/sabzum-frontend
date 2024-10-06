export class SearchFilters<T = void> {
  page?: number;
  pageSize?: number;
  sortBy?: T;
  sortOrder?: 'ASC' | 'DESC';
  dateFrom?: number;
  dateTo?: number;
}

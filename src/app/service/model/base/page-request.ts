export class PageRequest {

  readonly pageNumber: number;

  readonly pageSize: number;

  constructor(pageNumber: number, pageSize: number) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}

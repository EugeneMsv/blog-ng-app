export abstract class Pageable<T> {
  /**
   * Returns the number of total pages.
   */
  private _totalPages: number;

  /**
   * Returns the total amount of elements.
   */
  private _totalElements: number;

  /**
   * Returns the number of the current slice
   */
  private _number: number;

  /**
   *  Returns the size of the slice
   */
  private _size: number;

  /**
   * Returns the number of elements currently on this slice
   */
  private _numberOfElements: number;

  /**
   * Content of special type
   */
  private _content: Array<T> = [];


  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get numberOfElements(): number {
    return this._numberOfElements;
  }

  set numberOfElements(value: number) {
    this._numberOfElements = value;
  }

  get content(): Array<T> {
    return this._content;
  }

  set content(value: Array<T>) {
    this._content = value;
  }
}

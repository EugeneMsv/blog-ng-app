export class Pageable {
  /**
   * Returns the number of total pages.
   */
  totalPages: number;

  /**
   * Returns the total amount of elements.
   */
  totalElements: number;

  /**
   * Returns the number of the current slice
   */
  number: number;

  /**
   *  Returns the size of the slice
   */
  size: number;

  /**
   * Returns the number of elements currently on this slice
   */
  numberOfElements: number;
}

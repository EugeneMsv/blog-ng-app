export class Validate {

  public static isDefined<T>(value: T | undefined | null, message: string): void {
    if (<T>value === undefined || <T>value === null) {
      throw new Error(message);
    }
  }

  public static notEmpty<T>(value: string | undefined | null, message: string): void {
    if (<T>value === undefined || <T>value === null || value === '') {
      throw new Error(message);
    }
  }

  public static notEmpty<T>(value: T[] | undefined | null, message: string): void {
    if (<T>value === undefined || <T>value === null || value.length === 0) {
      throw new Error(message);
    }
  }

}

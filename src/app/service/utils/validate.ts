export class Validate {

  public static notEmpty<T>(value: T | undefined | null, message: string, ...parameters: any[]): void {
    Validate.isDefined(value, message, parameters);
    if ((typeof(value) === 'string' && value === '')
      || (Array.isArray(value) && (<Array<any>>value).length === 0)) {
      Validate.throwError(message, parameters);
    }
  }

  public static isDefined<T>(value: T | undefined | null, message: string, ...parameters: any[]): void {
    if (<T>value === undefined || <T>value === null) {
      Validate.throwError(message, parameters);
    }
  }

  public static isTrue<T>(expression: boolean, message: string, ...parameters: any[]): void {
    if (!expression) {
      Validate.throwError(message, parameters);
    }
  }

  public static throwError(message: string, parameters: any[]): void {
    for (let i = 0; i < parameters.length; i++) {
      message = message.replace(`{${i}}`, parameters[i]);
    }
    throw new Error(message);
  }

}

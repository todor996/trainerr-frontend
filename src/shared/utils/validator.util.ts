import { emailRegex, urlRegex } from '@shared/consts/regex';
import { isDate } from './isDate.util';
import { isFalsy } from './isFalsy.util';

type ErrorValidator =
  | ''
  | 'required'
  | 'pattern'
  | 'email'
  | 'url'
  | 'min'
  | 'max'
  | 'equals'
  | string;

type ValidatorConfig = {
  error?: string;
};

// TODO: Think of moving this to some service folder
export class Validator {
  public error?: ErrorValidator = '';

  static readonly errorMessageDict: Record<string, string> = {
    required: 'required',
    pattern: 'pattern',
    email: 'email',
    url: 'url',
    min: 'min',
    max: 'max',
    equals: 'equals',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public value: any = null) {
    this.value = value;
  }

  /**
   * Returns an object containing fields with errors
   * If there is no error for a field, the filed is not included in the object
   */
  static formatErrors(validatorDict: Record<string, Validator>): Record<string, string> {
    const errors = {};

    Object.entries(validatorDict).forEach(([key, value]) => {
      if (value?.error) {
        errors[key] = value.error;
      }
    });

    return errors;
  }

  /**
   * Set error messages for the validator
   * If a key is not provided, the default message is used
   * If a key is provided, but the value is empty, the default message is used
   *
   * @param messages - Object with keys as error names and values as error messages
   */
  static setErrorMessages(messages: Record<string, string>): void {
    Object.entries(messages).forEach(([key, value]) => {
      if (!value) {
        return;
      }

      Validator.errorMessageDict[key] = value;
    });
  }

  /**
   * If `value` passes the `test`, return  '', otherwise return `error`
   */
  public validate<T>({
    value,
    test,
    error,
  }: {
    value: T;
    test: (value: T) => boolean;
    error: string;
  }): Validator {
    // If there is already an error return it, so the first function has the biggest priority
    if (this.error) {
      return this;
    }

    const isGood = test(value);
    this.error = isGood ? '' : error;

    return this;
  }

  required(config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: Boolean,
      error: config.error || Validator.errorMessageDict.required,
    });
  }

  email(config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (value) => isFalsy(value) || emailRegex.test(value.toString()),
      error: config.error || Validator.errorMessageDict.email,
    });
  }

  url(config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (value) => isFalsy(value) || urlRegex.test(value.toString()),
      error: config.error || Validator.errorMessageDict.url,
    });
  }

  date(config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (value) => isFalsy(value) || isDate(value),
      error: config.error || Validator.errorMessageDict.pattern,
    });
  }

  min(length: number, config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (value) => isFalsy(value) || value.toString().length >= length,
      error: config.error || Validator.errorMessageDict.min,
    });
  }

  max(length: number, config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (value) => isFalsy(value) || value.toString().length <= length,
      error: config.error || Validator.errorMessageDict.max,
    });
  }

  equals(value: string, config: ValidatorConfig = {}): Validator {
    return this.validate({
      value: this.value,
      test: (val) => isFalsy(val) || val === value,
      error: config.error || Validator.errorMessageDict.equals,
    });
  }
}

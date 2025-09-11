// lib/errors/AppError.ts

import { ERROR_CODES, AppErrorCode, ErrorDefinition } from './error-codes';

export class AppError extends Error {
  public readonly code: string;
  public readonly httpStatus: number;
  public readonly definition: ErrorDefinition;

  constructor(errorCode: AppErrorCode) {
    // Look up the error definition in our dictionary
    const errorDefinition = ERROR_CODES[errorCode];

    // Call the Error class constructor with the message
    super(errorDefinition.message);

    // Ensure the class name is correct
    this.name = this.constructor.name;

    // Assign custom properties
    this.code = errorDefinition.code;
    this.httpStatus = errorDefinition.httpStatus;
    this.definition = errorDefinition;

    // Capture the stack trace for better debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

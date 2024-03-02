import { BaseError } from "../base.error";

export class FooExampleValidationError extends BaseError {
  constructor() {
    super("Foo example validation error!");

    this.name = "FooExampleValidationError";
    this.statusCode = 400;
  }
}

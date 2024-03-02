import { BaseError } from "../base.error";

export class FooEmptyError extends BaseError {
  constructor() {
    super("Foo is empty!");

    this.name = "FooEmptyError";
    this.statusCode = 400;
  }
}

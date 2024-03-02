import { BaseError } from "../errors/base.error";
import { FooExampleValidationError } from "../errors/foo/foo-example-validation.error";
import { BaseValidation } from "./base.validation";

export class ExampleValidation extends BaseValidation {
  isValid(): boolean {
    return typeof this.value === "string";
  }

  error(): BaseError {
    return new FooExampleValidationError();
  }
}
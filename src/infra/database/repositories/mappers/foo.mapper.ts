import { Foo } from "@/domain/entities/foo.entity";
import { PrismaFoo } from "../../configs/database-types";
import { ExampleValidation } from "@/domain/validation/example.validation";

export namespace FooMapper {
  export const toDatabase = (foo: Foo): PrismaFoo => {
    return {
      id: foo.id,
      bar: foo.bar,
      validationExample: foo.validationExample.value
    };
  };

  export const fromDatabase = (foo: PrismaFoo): Foo => {
    return new Foo(
      { bar: foo.bar, validationExample: new ExampleValidation(foo.validationExample) },
      foo.id,
    );
  };
}

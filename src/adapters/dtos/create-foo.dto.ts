import { Foo } from "@/domain/entities/foo.entity";
import { ExampleValidation } from "@/domain/validation/example.validation";

interface CreateFooRequestProps {
  example: string;
  fieldWithValidation: string;
}

export class CreateFooRequestDTO {
  map(request: CreateFooRequestProps): Foo {
    const foo = new Foo({ bar: request.example, validationExample: new ExampleValidation(request.fieldWithValidation) });

    return foo;
  }
}

export class CreateFooResponseDTO {
  ejemplo: string;
  campoConValidacion: string;

  map(foo: Foo): CreateFooResponseDTO {
    this.ejemplo = foo.bar;
    this.campoConValidacion = foo.validationExample.value;

    return this;
  }
}

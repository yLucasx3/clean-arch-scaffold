import { Foo } from "@/domain/entities/foo.entity";

interface CreateFooRequestProps {
  example: string;
}

export class CreateFooRequestDTO {
  map(request: CreateFooRequestProps): Foo {
    const foo = new Foo();

    foo.bar = request.example;

    return foo;
  }
}

export class CreateFooResponseDTO {
  ejemplo: string;

  map(foo: Foo): CreateFooResponseDTO {
    this.ejemplo = foo.bar;

    return this;
  }
}

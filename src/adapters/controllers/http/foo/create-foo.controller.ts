import { Foo } from "@/domain/entities/foo.entity";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";

export class CreateFooController {
  constructor(private createFooUseCase: CreateFooUseCase) {}

  async handle() {
    const foo = new Foo({ bar: "example" });
    const newFoo = await this.createFooUseCase.handle(foo);

    return newFoo;
  }
}

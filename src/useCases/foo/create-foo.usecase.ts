import { Foo } from "@/domain/entities/foo.entity";
import { FooEmptyError } from "@/domain/errors/foo/foo-empty.error";
import { IFooRepository } from "@/domain/repositories/foo.repository";

export class CreateFooUseCase {
  constructor(private fooRepository: IFooRepository) {}

  async handle(foo: Foo): Promise<Foo> {
    if (!foo.bar) {
      throw new FooEmptyError();
    }

    const newFoo = await this.fooRepository.create({
      bar: foo.bar,
    });

    return newFoo;
  }
}

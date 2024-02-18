import { Foo } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";

export class CreateFooUseCase {
  constructor(private fooRepository: IFooRepository) {}

  async handle(foo: Foo): Promise<Foo> {
    const newFoo = await this.fooRepository.create({
      bar: foo.bar,
    });

    // criar pasta de tratamento de erros

    return newFoo;
  }
}

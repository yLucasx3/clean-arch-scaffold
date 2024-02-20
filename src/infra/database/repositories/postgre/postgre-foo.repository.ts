import { Foo, FooProps } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";
import { prisma } from "../../configs/prisma";
import { FooMapper } from "../mappers/foo.mapper";

export class PostgreFooRepository implements IFooRepository {
  show(id: number): Promise<Foo | null> {
    id;
    throw new Error("Method not implemented.");
  }
  async create(foo: FooProps): Promise<Foo> {
    const newFoo = await prisma.foo.create({
      data: FooMapper.toDatabase(foo),
    });

    return FooMapper.fromDatabase(newFoo);
  }
  update(id: number, foo: Partial<FooProps>): Promise<Foo> {
    id;
    foo;
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    id;
    throw new Error("Method not implemented.");
  }
}

import { Foo, FooProps } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";
import { prisma } from "../../configs/prisma";
import { FooMapper } from "../mappers/foo.mapper";

export class PostgreFooRepository implements IFooRepository {
  async show(id: number): Promise<Foo | null> {
    const findedFoo = await prisma.foo.findUnique({ where: { id } });

    if (!findedFoo) return null;

    return FooMapper.fromDatabase(findedFoo);
  }

  async create(foo: FooProps): Promise<Foo> {
    const newFoo = await prisma.foo.create({
      data: FooMapper.toDatabase(foo),
    });

    return FooMapper.fromDatabase(newFoo);
  }

  async update(id: number, foo: Partial<FooProps>): Promise<Foo> {
    const updatedFoo = await prisma.foo.update({ where: { id }, data: foo });

    return FooMapper.fromDatabase(updatedFoo);
  }

  async delete(id: number): Promise<void> {
    const deletedFoo = await prisma.foo.delete({ where: { id } });

    deletedFoo;
  }
}

import { Foo } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";
import { prisma } from "../../configs/prisma";
import { FooMapper } from "../mappers/foo.mapper";

export class PrismaFooRepository implements IFooRepository {
  async show(id: string): Promise<Foo | null> {
    const findedFoo = await prisma.foo.findUnique({ where: { id } });

    if (!findedFoo) return null;

    return FooMapper.fromDatabase(findedFoo);
  }

  async create(foo: Foo): Promise<Foo> {
    const newFoo = await prisma.foo.create({
      data: FooMapper.toDatabase(foo)
    });

    return FooMapper.fromDatabase(newFoo);
  }

  async update(id: string, foo: Partial<Foo>): Promise<Foo> {
    const updatedFoo = await prisma.foo.update({ where: { id }, data: FooMapper.toDatabase(new Foo({ bar: foo.bar!, validationExample: foo.validationExample! }, foo.id)) });

    return FooMapper.fromDatabase(updatedFoo);
  }

  async delete(id: string): Promise<void> {
    const deletedFoo = await prisma.foo.delete({ where: { id } });

    deletedFoo;
  }
}

import { Foo, FooProps } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";

export class FooRepository implements IFooRepository {
  public foos: Foo[] = [];

  show(id: number): Promise<Foo | null> {
    return Promise.resolve(this.foos.find((foo) => foo.id == id) || null);
  }

  create(foo: FooProps): Promise<Foo> {
    const newFoo = new Foo(foo);

    this.foos.push(newFoo);
    return Promise.resolve(newFoo);
  }

  update(id: number, foo: Partial<FooProps>): Promise<Foo> {
    return Promise.resolve(new Foo({ bar: foo.bar! }));
  }

  delete(id: number): Promise<void> {
    id;
    return Promise.resolve();
  }
}

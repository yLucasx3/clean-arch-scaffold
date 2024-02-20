import { Foo, FooProps } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";

export class InMemoryFooRepository implements IFooRepository {
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
    const fooToUpdateIndex = this.foos.findIndex((foo) => foo.id === id);

    if (fooToUpdateIndex > -1) {
      Object.assign(this.foos[fooToUpdateIndex], foo);
    }

    return Promise.resolve(this.foos[fooToUpdateIndex]);
  }

  delete(id: number): Promise<void> {
    this.foos = this.foos.filter((foo) => foo.id !== id);

    return Promise.resolve();
  }
}

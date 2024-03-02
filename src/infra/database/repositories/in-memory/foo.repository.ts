import { Foo, IFooProps } from "@/domain/entities/foo.entity";
import { IFooRepository } from "@/domain/repositories/foo.repository";

export class InMemoryFooRepository implements IFooRepository {
  foos = new Array<Foo>();

  show(id: string): Promise<Foo | null> {
    const foo = this.foos.find((foo) => foo.id == id);

    if (!foo) return Promise.resolve(null);

    return Promise.resolve(foo || null);
  }

  create(foo: IFooProps): Promise<Foo> {
    const newFoo = new Foo(foo);

    this.foos.push(newFoo);
    return Promise.resolve(newFoo);
  }

  update(id: string, foo: Partial<IFooProps>): Promise<Foo> {
    const fooToUpdateIndex = this.foos.findIndex((foo) => foo.id === id);

    if (fooToUpdateIndex > -1) {
      Object.assign(this.foos[fooToUpdateIndex], foo);
    }

    return Promise.resolve(new Foo(this.foos[fooToUpdateIndex]));
  }

  delete(id: string): Promise<void> {
    this.foos = this.foos.filter((foo) => foo.id !== id);

    return Promise.resolve();
  }
}

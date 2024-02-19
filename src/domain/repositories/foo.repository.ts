import { Foo, FooProps } from "../entities/foo.entity";

export interface IFooRepository {
  show(id: number): Promise<Foo | null>;
  create(foo: FooProps): Promise<Foo>;
  update(id: number, foo: Partial<FooProps>): Promise<Foo>;
  delete(id: number): Promise<void>;
}

import { Foo, IFooProps } from "../entities/foo.entity";

export interface IFooRepository {
  show(id: string): Promise<Foo | null>;
  create(foo: IFooProps): Promise<Foo>;
  update(id: string, foo: Partial<IFooProps>): Promise<Foo>;
  delete(id: string): Promise<void>;
}

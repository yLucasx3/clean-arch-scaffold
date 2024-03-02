import { ExampleValidation } from '../validation/example.validation';
import { BaseEntity } from './base.entity';

export interface IFooProps {
  bar: string;
  validationExample: ExampleValidation;
}

export class Foo extends BaseEntity<IFooProps>{
  get bar(): string {
    return this.props.bar;
  }

  get validationExample(): ExampleValidation {
    return this.props.validationExample
  }

  constructor(props: IFooProps, id?: string) {
    super(props, id);
  }
}

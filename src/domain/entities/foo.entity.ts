export interface FooProps {
  id?: number;
  bar: string;
}

export class Foo implements FooProps {
  readonly id?: number;
  bar: string;

  constructor(fooProps?: FooProps) {
    if (fooProps) {
      Object.assign(fooProps, this);
    }
  }

  show() {
    return this.bar;
  }
}

export class FooEmptyError extends Error {
  constructor() {
    super("Foo is empty!");

    this.name = "FooEmptyError";
  }
}

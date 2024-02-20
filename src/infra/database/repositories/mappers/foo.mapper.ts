import { Foo, FooProps } from "@/domain/entities/foo.entity";
import { PrismaFoo } from "../../configs/database-types";
import { Optional } from "@/domain/shared/make-optional";

export namespace FooMapper {
  export const toDatabase = (foo: FooProps): Optional<PrismaFoo, "id"> => {
    return {
      id: foo.id,
      bar: foo.bar,
    };
  };

  export const fromDatabase = (foo: PrismaFoo): Foo => {
    return new Foo({
      id: foo.id,
      bar: foo.bar,
    });
  };
}

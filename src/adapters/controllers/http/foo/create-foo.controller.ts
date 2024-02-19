import { Foo } from "@/domain/entities/foo.entity";
import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adapters/contracts/http/request.contract";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";
import { IHttpResponseContract } from "@/adapters/contracts/http/response.contract";
import { created, internalError } from "@/adapters/helpers/http.helper";

export class CreateFooController implements IHttpControllerContract {
  constructor(private createFooUseCase: CreateFooUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { bar } = request.body;

      const foo = new Foo({ bar });

      const newFoo = await this.createFooUseCase.handle(foo);

      return created(newFoo);
    } catch (error) {
      return internalError();
    }
  }
}

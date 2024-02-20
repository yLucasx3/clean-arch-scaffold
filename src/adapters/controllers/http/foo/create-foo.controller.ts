import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adapters/contracts/http/request.contract";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";
import { IHttpResponseContract } from "@/adapters/contracts/http/response.contract";
import { FooEmptyError } from "@/domain/errors/foo/foo-empty.error";
import {
  badRequest,
  created,
  internalError,
} from "@/adapters/helpers/http.helper";
import {
  CreateFooRequestDTO,
  CreateFooResponseDTO,
} from "@/adapters/dtos/create-foo.dto";

export class CreateFooController implements IHttpControllerContract {
  constructor(private createFooUseCase: CreateFooUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const bodyDto = new CreateFooRequestDTO().map(request.body);

      const newFoo = await this.createFooUseCase.handle(bodyDto);

      const response = new CreateFooResponseDTO().map(newFoo);

      return created(response);
    } catch (error) {
      if (error instanceof FooEmptyError) {
        return badRequest(error);
      }

      return internalError();
    }
  }
}

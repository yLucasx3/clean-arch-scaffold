import { CreateFooController } from "@/adapters/controllers/http/foo/create-foo.controller";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";
import { FooRepository } from "../database/repositories/in-memory/foo.repository";

const createFooRepository = new FooRepository();
const createFooUseCase = new CreateFooUseCase(createFooRepository);
const createFooFactory = new CreateFooController(createFooUseCase);

export { createFooFactory };

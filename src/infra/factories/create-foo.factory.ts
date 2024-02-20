import { CreateFooController } from "@/adapters/controllers/http/foo/create-foo.controller";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";
import { PostgreFooRepository } from "../database/repositories/postgresql/postgresql-foo.repository";

const createFooRepository = new PostgreFooRepository();
const createFooUseCase = new CreateFooUseCase(createFooRepository);
const createFooFactory = new CreateFooController(createFooUseCase);

export { createFooFactory };

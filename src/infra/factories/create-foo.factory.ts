import { CreateFooController } from "@/adapters/controllers/http/foo/create-foo.controller";
import { CreateFooUseCase } from "@/useCases/foo/create-foo.usecase";
import { PrismaFooRepository } from "../database/repositories/prisma/prisma-foo.repository";

const createFooRepository = new PrismaFooRepository();
const createFooUseCase = new CreateFooUseCase(createFooRepository);
const createFooFactory = new CreateFooController(createFooUseCase);

export { createFooFactory };

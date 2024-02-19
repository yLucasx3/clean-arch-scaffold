import { Router } from "express";
import { expressAdapter } from "../express-adapter";
import { createFooFactory } from "@/infra/factories/create-foo.factory";

export default (router: Router) => {
  router.post("/foo", expressAdapter(createFooFactory));
};

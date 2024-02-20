import { Router } from "express";
import { setupDocs } from "../../../../docs";

export default (router: Router): void => {
  router.use("/docs", ...setupDocs);
};

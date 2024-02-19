import { app } from "./infra/http/express.config";

app.on("error", (reason) => {
  console.log("Unhandled error!!!", reason);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`API RUNNING ON PORT ${PORT}`));

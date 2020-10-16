import { Server } from "miragejs";
import { commonMenuData } from "./data";

export function mockServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,
    routes() {
      this.get("/api/commonMenu", () => commonMenuData);
      this.passthrough();
    },
  });
  return server;
}

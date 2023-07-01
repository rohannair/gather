import { extendType, objectType } from "nexus";

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
    });
  },
});

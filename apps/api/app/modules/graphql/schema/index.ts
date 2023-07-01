import { makeSchema } from "nexus";
import { Query } from "./Query";
import { User } from "./User";

export const schema = makeSchema({
  types: [Query, User],
});

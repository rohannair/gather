import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("email");
    t.string("givenName");
    t.string("familyName");
    t.string("initials");
    t.string("profileImg");
    t.string("role");
  },
});

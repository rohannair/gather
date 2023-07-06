import { getOrganizationsByUser } from "@/lib/db/schema/organizationsUsers";
import { getUserById } from "@/lib/db/schema/users";
import { objectType, extendType } from "nexus";

export const OrganizationQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("organizations", {
      type: Organization,
      resolve: (root, _args, ctx) => {
        return getOrganizationsByUser(ctx.userId);
      },
    });
  },
});

export const Organization = objectType({
  name: "Organization",
  definition(t) {
    t.string("id");
    t.string("name");
    t.field("owner", {
      type: "User",
      resolve: (_root, args, ctx) => {
        return getUserById(ctx.ownerId);
      },
    });
  },
});

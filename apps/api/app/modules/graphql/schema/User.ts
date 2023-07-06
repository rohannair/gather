import {
  insertUser,
  updateUser,
  getUserById,
  type NewUser,
} from "@/lib/db/schema/users";
import { mutationField, objectType, extendType, inputObjectType } from "nexus";
import {} from "@/lib/db/schema/users";

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",

      resolve: (_root, _args, { user: { id } }) => {
        return getUserById(id);
      },
    });
  },
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("email");
    t.string("givenName");
    t.string("familyName");
    t.string("initials");
    t.string("profileImg");
    t.string("role");
  },
});

const CreateUserType = inputObjectType({
  name: "CreateUserType",
  definition(t) {
    t.nonNull.string("email");
    t.string("givenName");
    t.string("familyName");
    t.string("initials");
    t.string("profileImg");
    t.string("role");
  },
});

export const createUser = mutationField("createUser", {
  type: User,
  args: { data: CreateUserType },
  resolve: (_root, { data }, _ctx) => {
    return insertUser(data as NewUser);
  },
});

const EditUserType = inputObjectType({
  name: "EditUserType",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("email");
    t.string("givenName");
    t.string("familyName");
    t.string("initials");
    t.string("profileImg");
    t.string("role");
  },
});

export const editUser = mutationField("editUser", {
  type: User,
  args: { data: EditUserType },
  resolve: (_root, { data }, _ctx) => {
    if (!data?.id) {
      throw new Error("No user ID provided");
    }

    /**
     * NewUser input type omits ID, so is reused here too
     */
    return updateUser(data.id, data as NewUser);
  },
});

import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TourCreateNestedManyWithoutUsersInput } from "./TourCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  image?: ImageWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  phoneNumber: number;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  tours?: TourCreateNestedManyWithoutUsersInput;
  username: string;
};

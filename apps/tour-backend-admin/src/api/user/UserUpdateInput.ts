import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TourUpdateManyWithoutUsersInput } from "./TourUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  firstName?: string | null;
  image?: ImageWhereUniqueInput | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: number;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  tours?: TourUpdateManyWithoutUsersInput;
  username?: string;
};

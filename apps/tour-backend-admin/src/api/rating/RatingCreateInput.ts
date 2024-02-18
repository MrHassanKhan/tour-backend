import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  user?: UserWhereUniqueInput | null;
  value: number;
};

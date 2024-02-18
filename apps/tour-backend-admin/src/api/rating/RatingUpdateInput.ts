import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  user?: UserWhereUniqueInput | null;
  value?: number;
};

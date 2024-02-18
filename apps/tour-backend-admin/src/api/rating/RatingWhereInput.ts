import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type RatingWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  value?: FloatFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TourWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  latitude?: FloatFilter;
  longitude?: FloatFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};

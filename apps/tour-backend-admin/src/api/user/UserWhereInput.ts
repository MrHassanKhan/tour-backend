import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { TourListRelationFilter } from "../tour/TourListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  lastName?: StringNullableFilter;
  phoneNumber?: IntFilter;
  ratings?: RatingListRelationFilter;
  tours?: TourListRelationFilter;
  username?: StringFilter;
};

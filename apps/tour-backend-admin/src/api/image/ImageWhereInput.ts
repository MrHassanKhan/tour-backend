import { StringFilter } from "../../util/StringFilter";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  tour?: TourWhereUniqueInput;
  url?: StringFilter;
  users?: UserListRelationFilter;
};

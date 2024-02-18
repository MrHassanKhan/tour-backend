import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserCreateNestedManyWithoutImagesInput } from "./UserCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  tour?: TourWhereUniqueInput | null;
  url: string;
  users?: UserCreateNestedManyWithoutImagesInput;
};

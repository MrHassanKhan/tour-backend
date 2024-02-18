import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserUpdateManyWithoutImagesInput } from "./UserUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  tour?: TourWhereUniqueInput | null;
  url?: string;
  users?: UserUpdateManyWithoutImagesInput;
};

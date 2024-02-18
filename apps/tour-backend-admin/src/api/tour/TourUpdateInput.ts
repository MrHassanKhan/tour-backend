import { ImageUpdateManyWithoutToursInput } from "./ImageUpdateManyWithoutToursInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TourUpdateInput = {
  description?: string | null;
  images?: ImageUpdateManyWithoutToursInput;
  latitude?: number;
  longitude?: number;
  name?: string;
  user?: UserWhereUniqueInput | null;
};

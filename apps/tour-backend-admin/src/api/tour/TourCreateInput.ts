import { ImageCreateNestedManyWithoutToursInput } from "./ImageCreateNestedManyWithoutToursInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TourCreateInput = {
  description?: string | null;
  images?: ImageCreateNestedManyWithoutToursInput;
  latitude: number;
  longitude: number;
  name: string;
  user?: UserWhereUniqueInput | null;
};

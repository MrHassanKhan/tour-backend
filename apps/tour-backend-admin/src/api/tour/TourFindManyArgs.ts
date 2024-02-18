import { TourWhereInput } from "./TourWhereInput";
import { TourOrderByInput } from "./TourOrderByInput";

export type TourFindManyArgs = {
  where?: TourWhereInput;
  orderBy?: Array<TourOrderByInput>;
  skip?: number;
  take?: number;
};

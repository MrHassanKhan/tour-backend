import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tourId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};

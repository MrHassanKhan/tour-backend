import { Tour } from "../tour/Tour";
import { User } from "../user/User";

export type Image = {
  createdAt: Date;
  id: string;
  tour?: Tour | null;
  updatedAt: Date;
  url: string;
  users?: Array<User>;
};

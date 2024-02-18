import { Image } from "../image/Image";
import { User } from "../user/User";

export type Tour = {
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<Image>;
  latitude: number;
  longitude: number;
  name: string;
  updatedAt: Date;
  user?: User | null;
};

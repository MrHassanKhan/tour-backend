import { Comment } from "../comment/Comment";
import { Image } from "../image/Image";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";
import { Tour } from "../tour/Tour";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  image?: Image | null;
  lastName: string | null;
  phoneNumber: number;
  ratings?: Array<Rating>;
  roles: JsonValue;
  tours?: Array<Tour>;
  updatedAt: Date;
  username: string;
};

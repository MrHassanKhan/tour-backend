import { User } from "../user/User";

export type Rating = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  value: number;
};

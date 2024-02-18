import { Tour as TTour } from "../api/tour/Tour";

export const TOUR_TITLE_FIELD = "name";

export const TourTitle = (record: TTour): string => {
  return record.name?.toString() || String(record.id);
};

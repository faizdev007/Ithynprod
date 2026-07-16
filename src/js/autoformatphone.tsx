import { AsYouType } from "libphonenumber-js";

export const formatPhone = (
  value: string,
  country: string
) => {
  return new AsYouType(country as any).input(value);
};
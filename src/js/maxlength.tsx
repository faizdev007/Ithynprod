import { getExampleNumber } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";

export const getPhoneMaxLength = (country: string) => {
  const example = getExampleNumber(country as any, examples);

  if (!example) return 15;

  return example.formatInternational().length;
};
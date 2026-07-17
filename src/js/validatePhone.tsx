import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validatePhone = (
  phone: string,
  country: string
) => {
  const phoneNumber = parsePhoneNumberFromString(
    phone,
    country as any
  );

  return phoneNumber?.isValid() ?? false;
};
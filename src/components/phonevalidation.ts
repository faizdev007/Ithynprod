import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validatePhone = (phone: string) => {
  const phoneNumber = parsePhoneNumberFromString("+" + phone);

  return phoneNumber?.isValid() ?? false;
};
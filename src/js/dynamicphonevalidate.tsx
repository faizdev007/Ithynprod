import {
  parsePhoneNumberFromString,
  AsYouType,
} from "libphonenumber-js";

export const validatePhone = (
  phone: string,
  country: string
): boolean => {
  const phoneNumber = parsePhoneNumberFromString(phone, country as any);

  return phoneNumber ? phoneNumber.isValid() : false;
};
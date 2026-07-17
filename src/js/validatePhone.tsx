import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validatePhone = (phone: string) => {
  const phoneNumber = parsePhoneNumberFromString(phone);

  if (!phoneNumber) {
    return {
      valid: false,
      country: null,
      length: 0,
    };
  }

  return {
    valid: phoneNumber.isValid(),
    country: phoneNumber.country,          // GB, IN, US...
    length: phoneNumber.nationalNumber.length,
    nationalNumber: phoneNumber.nationalNumber,
  };
};
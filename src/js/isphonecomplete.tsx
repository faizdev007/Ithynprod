import { parsePhoneNumberFromString } from "libphonenumber-js";

export const isPhoneComplete = (phone: string) => {
  const phoneNumber = parsePhoneNumberFromString(phone);

  return phoneNumber ? phoneNumber.isPossible() : false;
};
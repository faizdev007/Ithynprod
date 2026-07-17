import { parsePhoneNumberFromString } from "libphonenumber-js";

export const isPhoneComplete = (phone: string) => {
  const phoneNumber = parsePhoneNumberFromString(phone);
  console.log("Parsed Phone Number:", phoneNumber);
  return phoneNumber ? phoneNumber.isPossible() : false;
};
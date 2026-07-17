import { parsePhoneNumberFromString } from "libphonenumber-js";

export const isPhoneComplete = (
  phone: string,
  country: string
) => {
  const phoneNumber = parsePhoneNumberFromString(
    phone,
    country as any
  );

  if (!phoneNumber) return false;

  return (
    phoneNumber.isPossible() &&
    phoneNumber.isValid()
  );
};
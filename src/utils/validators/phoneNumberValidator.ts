export const phoneNumberValidator = (phoneNumber: string) => {
  const ukPhoneNumberRegex = /^((\+44)|(0)) ?\d{4} ?\d{6}$/;
  return ukPhoneNumberRegex.test(phoneNumber);
}
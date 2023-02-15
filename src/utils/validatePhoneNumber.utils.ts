export const validatePhoneNumber = (phoneNumber: string) => {
  const regex =
    /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test(
      phoneNumber
    );

  if (!regex) {
    return false;
  }

  return true;
};

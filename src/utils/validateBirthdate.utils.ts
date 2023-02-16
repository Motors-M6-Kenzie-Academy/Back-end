export const validateBirthdate = (birthDate: string) => {
  const regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.exec(birthDate);
  if (!regex) return false;
  return true;
};

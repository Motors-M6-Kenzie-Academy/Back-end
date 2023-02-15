export const validateBirthdate = (birthDate: string) => {
  const dtArray = birthDate.split("/");

  let dtDay = parseInt(dtArray[0]);
  let dtMonth = parseInt(dtArray[1]);
  let dtYear = parseInt(dtArray[2]);

  if (dtDay < 1 || dtDay > 31) {
    return false;
  }

  if (dtMonth < 1 || dtMonth > 12) {
    return false;
  }

  let fullYear = new Date().getFullYear();

  if (dtYear < 0 || dtYear > fullYear) {
    return false;
  }
  return true;
};

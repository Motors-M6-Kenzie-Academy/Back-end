export const validateCPF = (cpf: string) => {
  const regex = /^([0-9]{3})\.([0-9]{3})\.([0-9]{3})-([0-9]{2})$/.test(cpf);

  if (!regex) {
    return false;
  }

  return true;
};

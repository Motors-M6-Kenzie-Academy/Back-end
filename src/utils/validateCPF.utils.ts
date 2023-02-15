export const validateCPF = (cpf: string) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf);

  if (!regex) {
    return false;
  }

  return true;
};

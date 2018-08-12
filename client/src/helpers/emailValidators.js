const EMAIL_RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateEmails = emails => {
  return emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !!email)
    .filter(email => !EMAIL_RE.test(email))
    .map(email => email);
};

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SEND_GRIND_KEY);

const recipientsAddresses = recipients => recipients.map(r => r.email);

export default ({ subject, recipients }, content) => {
  // send email
  const msg = {
    to: recipientsAddresses(recipients),
    from: 'no-reply@mailer.com',
    subject,
    html: content,
    trackingSettings: {
      click_tracking: {
        enable: true
      }
    }
  };

  return sgMail.send(msg);
};

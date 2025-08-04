import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_COMPANY = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_COMPANY;
const TEMPLATE_ID_AUTOREPLY = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const COMPANY_EMAIL = process.env.REACT_APP_COMPANY_EMAIL;

const useEmailSender = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmails = async (formData, INFOTYPE) => {

    console.log("formData", formData);
    setLoading(true);
    setError('');
    setSuccess(false);

    console.log(SERVICE_ID, TEMPLATE_ID_COMPANY, TEMPLATE_ID_AUTOREPLY, COMPANY_EMAIL);
    
    let templateParamsCompany = {};
    let templateParamsAutoReply = {};

      templateParamsCompany={
        ...formData,
        email_Company: COMPANY_EMAIL,
        FormType: INFOTYPE
      }

      templateParamsAutoReply = {
        name: formData.name,
        FormType: INFOTYPE,
        email: formData.email,
      }
 
  

  
    let result = { success: false, error: '', loading: true };

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID_COMPANY, templateParamsCompany),
        emailjs.send(SERVICE_ID, TEMPLATE_ID_AUTOREPLY, templateParamsAutoReply),
      ]);
      setSuccess(true);
      result.success = true;
    } catch (err) {
      const errMsg = 'Failed to send email. Please try again.';
      setError(errMsg);
      result.error = errMsg;
    } finally {
      setLoading(false);
      result.loading = false;
      return result;
    }
  };

  return {
    sendEmails
  };
};

export default useEmailSender;

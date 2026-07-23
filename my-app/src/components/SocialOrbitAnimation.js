"use client";

import useEmailSender from "../components/hooks/useEmailSender";
import Subscribe from "../forms/subscribe";

export default function SocialOrbitHero() {
  const { sendEmails } = useEmailSender();

  async function onSubmitFormRequest(formData, INFOTYPE) {
    return await sendEmails(formData, INFOTYPE);
  }

  return (
    <section className="relative w-full p-0">

      {/* Background Image */}
      <img
        src="/img/subscribe-apurva-software-solutions.png" class="w-full"
        alt="Subscribe Apurva Software Solutions"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 px-6 md:px-16" style={{top: '132px',
                left: '29px'}}>
          <div className="max-w-sm">
            <Subscribe onSubmitFormRequest={onSubmitFormRequest} lft="29" rtl="0" top="132"/>
          </div>
        </div>
      </div>
    </section>
  );
}
const ServicesFaqs = ()=>{
    return(
        <section class="faq-section w-full max-w-none px-6">
     
          <div class="text-center">
        <h2 className="text-3xl font-bold">
              Frequently{" "}
                <span className="bg-[#ff4a17] bg-clip-text text-transparent">
                Asked Question
                </span>
            </h2>
            <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
            </div>
      
          <div class="accordion faq-accordion" id="faqAccordion">
      
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq1">
                  As a known software development company, what services do you offer?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse text-black" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  We offer custom software development, web & mobile apps, UI/UX design,
                  cloud solutions, cybersecurity, SEO, and maintenance services.
                </div>
              </div>
            </div>
      
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Does your company work with all types of technology and platforms?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes, we work with MERN, MEAN, React, Angular, Node.js, cloud platforms,
                  and custom enterprise solutions.
                </div>
              </div>
            </div>
      
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Do you provide after-development services?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Absolutely. We provide maintenance, monitoring, security updates,
                  performance optimization, and support plans.
                </div>
              </div>
            </div>
      
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Does your company work in a zero time zone?
                </button>
              </h2>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes, we provide flexible working hours and support clients globally
                  across time zones.
                </div>
              </div>
            </div>
      
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq5">
                  How much time will it take to develop the software?
                </button>
              </h2>
              <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Timelines depend on project scope, complexity, and integrations.
                  We provide a clear milestone-based plan before starting.
                </div>
              </div>
            </div>
      
          </div>
       
      </section>
    )
}

export default ServicesFaqs;
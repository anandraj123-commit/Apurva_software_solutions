import socialLink from "./socialLinks.js";
import {creator1,creator2,creator3,creator4} from "./creator.js";
const blogsArray = [
    {
      id: 1,
      type:'Digital Marketing',
      src: '/img/blog/social-media-marketing-apurva-software-solutions.jpg',
      title: 'Social Media Marketing: A Key to Business Growth',
      excerpt: 'Boost your brand online with strategic posts, paid ads, and audience engagement. Apurva Software Solutions drives growth, trust, and visibility for businesses everywhere.',
      shortDesciption:`Boost your brand with engaging social media content and paid campaigns.<br /> Apurva Software Solutions ensures visibility, growth, and audience trust!`,
      description:`<p class="highlight">Apurva Software Solutions helps businesses grow by creating effective social media marketing strategies tailored to their needs. We focus on enhancing brand visibility and engagement across multiple platforms.</p>

<p>Our team analyzes audience behavior to craft content that resonates with the target demographic. We ensure each campaign aligns with business goals and maximizes ROI.</p>

<p>We specialize in Facebook marketing, running ad campaigns that target the right audience while monitoring performance metrics for continuous improvement.</p>

<p>Instagram is leveraged to build brand aesthetics, storytelling, and influencer collaborations that expand reach and engagement in a visually compelling manner.</p>

<p>LinkedIn campaigns are designed to generate B2B leads, build professional credibility, and strengthen relationships with key stakeholders and industry partners.</p>

<p>Twitter marketing focuses on timely updates, trending hashtags, and interactive content that engages followers and sparks meaningful conversations.</p>

<p>Content marketing is a core part of our approach. We produce blog posts, videos, graphics, and infographics that educate, entertain, and engage audiences across platforms.</p>

<p>We utilize paid social campaigns with precise targeting and A/B testing to ensure every ad reaches the right audience and generates measurable results for clients.</p>

<p>Social listening tools allow us to track conversations, understand customer sentiments, and adapt campaigns in real-time to respond effectively to trends and feedback.</p>

<p>By partnering with Apurva Software Solutions, clients benefit from a full-spectrum social media strategy that drives growth, strengthens brand authority, and builds lasting connections with their audience.</p>
`,
      socialLink:socialLink,
      tags:` <span>Tags:</span><br></br>
            <span>Social Media Marketing</span>
            <span>Digital Marketing Strategy</span>
            <span>Brand Engagement</span>
            <span>Content Marketing</span>
            `,
      keywords:["Social Media Marketing", "Digital Marketing Strategy", "Brand Engagement", "Paid Social Campaigns", "Content Marketing"],
      creator:{...creator1,description:'Juli Kumari is the visionary CEO of Apurva Software Solutions. With extensive experience in software development and digital innovation, she leads the company in delivering cutting-edge web and mobile applications.'},
      comments:[],
      createdAt: new Date("2025-8-12")
    },
    {
      id: 2,
      type:'Software Development',
      src: '/img/blog/apurva-software-solutions-web-mobile-app-development.jpg',
      title: 'Web & Mobile App Development: How it Boosts Your Business.',
      excerpt: 'Apurva Software Solutions builds responsive web and mobile apps. Drive business growth and engage users seamlessly!',
      shortDesciption:` Apurva Software Solutions creates innovative web and mobile apps.<br />Boost your business with responsive and user-friendly solutions!`,
      description:`<p class="highlight">Apurva Software Solutions builds custom web and mobile applications that drive business growth. Innovative design and responsive interfaces ensure excellent user experience.</p>
<p>Our team focuses on seamless integration and high performance, helping businesses scale efficiently while maintaining top-notch quality standards.</p>
<p>We leverage modern technologies like Angular, React, Ionic, Node.js, and MongoDB to create robust applications tailored to client needs.</p>
<p>Mobile-first design ensures that users enjoy a smooth experience on all devices, from smartphones to tablets and desktops.</p>
<p>Security and reliability are core to our development process, protecting both your data and your users’ privacy.</p>
<p>Apurva Software Solutions employs agile methodologies, ensuring timely delivery and flexibility to adapt to changing requirements.</p>
<p>Our development team collaborates closely with clients, providing continuous support and updates to enhance application performance.</p>
<p>Analytics and optimization tools are integrated to help clients track engagement, conversion rates, and overall business impact.</p>
<p>We also provide post-launch maintenance, updates, and feature enhancements, keeping your applications current and competitive.</p>
<p>By choosing Apurva Software Solutions, businesses gain a strategic partner that transforms ideas into scalable, high-performing web and mobile solutions.</p>
`,
      socialLink:socialLink,
      tags:`<span>Tags:</span><br></br>
      <span>Web Development</span>
      <span>Mobile Apps</span>
      <span>App Development</span>
      <span>Digital Transformation</span>
      <span>Apurva Software Solutions</span>`,
      keywords:["Web Development", "Mobile App Development", "Digital Transformation", "Business Growth", "UI/UX Design"],
      comments:[],
      creator:{...creator1,description:'Juli Kumari is the visionary CEO of Apurva Software Solutions. With extensive experience in software development and digital innovation, she leads the company in delivering cutting-edge web and mobile applications.'},
      createdAt: new Date("2025-8-15")
    },
    {
      id: 3,
      type:'Digital Marketting',
      src: '/img/blog/local-seo-optimization.jpg',
      title: 'Boost Your Business Locally with Local SEO',
      excerpt: 'Enhance your business visibility locally. Increase your reach with effective SEO strategies!',
      shortDesciption:`Enhance your local business presence effectively.<br />Reach more customers with targeted SEO strategies!`,
      description:`<p class="highlight">Boost your local business with cutting-edge mobile app solutions. Apurva Software Solutions creates responsive, user-friendly, and scalable apps to enhance customer engagement in your city or region.</p>
<p>We help local businesses connect with their community through apps designed to streamline operations, improve customer experience, and increase loyalty.</p>
<p>From concept to deployment, every mobile app is tailored to meet your local business goals effectively and efficiently.</p>
<p>Our team leverages modern technologies like React, Angular, Node.js, Ionic, and MongoDB to build robust apps for web and mobile platforms that suit your local market.</p>
<p>Intuitive design ensures your customers in the city can easily navigate, interact, and engage with your brand digitally.</p>
<p>Analytics integration helps monitor user behavior, track local engagement, and optimize app performance for maximum ROI.</p>
<p>Apurva Software Solutions provides ongoing support and maintenance, ensuring your apps remain secure, bug-free, and relevant to local needs.</p>
<p>Agile development practices allow faster delivery, collaboration, and flexibility to adapt apps to evolving local trends and customer demands.</p>
<p>Apps are optimized for both iOS and Android, making your services accessible to a wide local audience without compromise.</p>
<p>Partnering with Apurva Software Solutions guarantees high-quality mobile apps that drive growth, improve operational efficiency, and strengthen your digital presence locally.</p>`,
      socialLink:socialLink,
      tags:` <span>Tags:</span><br/>
            <span>Local SEO</span>
            <span>Local Business Marketing</span>
            <span>Google My Business</span>
            <span>Search Optimization</span>
            <span>Apurva Software Solutions</span>`,
      keywords: ['Local SEO', 'Local Business Marketing', 'Google My Business', 'Search Optimization', 'SEO Services', 'Apurva Software Solutions'],
      comments:[],
      creator:{...creator2,description:'Utkarsh Bansal is a seasoned Product Manager at Apurva Software Solutions, where he leads the development and refinement of innovative software products.'},
      createdAt: new Date("2025-8-16")
    },
    {
      id: 4,
      type:'Software Development',
      src: '/img/blog/e-commerce-online-shopping.jpg',
      title: 'Transform Your Business with E-Commerce Applications',
      excerpt: 'Build scalable and user-friendly e-commerce applications with Apurva Software Solutions. Enhance sales, streamline operations, and deliver a seamless shopping experience!',
      shortDescription: `Build scalable and user-friendly e-commerce applications.<br />Enhance sales, streamline operations, and deliver seamless shopping experiences!`,
      description: `
      <p class="highlight">E-commerce applications have revolutionized the way businesses operate and customers shop online. From convenience to scalability, these applications provide a seamless digital experience for all users.</p>
      <p>With a well-designed product catalog, customers can easily browse categories, search for products, and view detailed descriptions with images and reviews. This helps increase engagement and conversions.</p>
      <p>Shopping carts and wishlists allow users to save their favorite products for later purchase, making the shopping experience flexible and convenient.</p>
      <p>Secure payment gateways are critical for any e-commerce application. Integrating options like credit/debit cards, UPI, digital wallets, and net banking ensures safe and smooth transactions.</p>
      <p>Real-time order tracking gives customers visibility on their purchases, including shipping updates, estimated delivery time, and order history.</p>
      <p>An intuitive admin panel allows business owners to manage products, inventory, orders, users, and analytics efficiently, improving operational efficiency.</p>
      <p>Customer reviews and ratings build trust and credibility, helping new buyers make informed decisions while enhancing brand reputation.</p>
      <p>Mobile and web support ensures users can shop anytime, anywhere. Responsive design and cross-platform compatibility are key to reaching a wider audience.</p>
      <p>Analytics and reporting features provide valuable insights into customer behavior, sales trends, and product performance, allowing data-driven business decisions.</p>
      <p>Apurva Software Solutions specializes in building scalable, feature-rich e-commerce applications tailored to client needs. We focus on user experience, security, and performance to help businesses grow online efficiently.</p>`,
      socialLink:socialLink,
      tags:` <span>Tags:</span><br></br>
      <span>E-commerce</span>
      <span>Online Shopping</span>
      <span>Shopping Cart</span>
      <span>Product Catalog</span>`,
      keywords: ['E-commerce', 'Online Shopping', 'Shopping Cart', 'Checkout', 'Deals', 'Discounts', 'Product Catalog', 'Payment Gateway', 'Digital Store', 'Customer Reviews'],
      comments:[],
      creator:{...creator3,description:'Avishek is the Chief Technology Officer (CTO) at Apurva Software Solutions. With extensive experience in software architecture, mobile and web application development, he leads the technology strategy and innovation at the company.'},
      createdAt: new Date("2025-8-19")
    }
    // {
    //   id: 5,
    //   type:'Engineering',
    //   src: '/img/blog/3.jpg',
    //   title: 'Improve design with typography hello shyam',
    //   excerpt: 'Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!',
    //   shortDesciption:` Non illo quas blanditiis repellendus laboriosam minima animi.<br /> Consectetur accusantium pariatur repudiandae!`,
    //   description:`<p class="highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.</p>
    //               <p>The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
    //               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>`,
    //   socialLink:socialLink ,
    //   tags:` <span>Tags:</span><br></br>
    //   <span>Advancher</span>
    //   <span>Landscape</span>
    //   <span>Travel</span>`,
    //   keywords:['Web','Agency','Company','Creative','Html','Marketing','Social Media','Branding'],
    //   comments:[],
    //   creator:{...creator4,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.'},
    //   createdAt: new Date("2025-8-22")
    // },
    // {
    //   id: 6,
    //   type:'Cyber Security',
    //   src: '/img/blog/2.jpg',
    //   title: 'Improve design with typography hello daddy',
    //   excerpt: 'Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!',
    //   shortDesciption:` Non illo quas blanditiis repellendus laboriosam minima animi.<br /> Consectetur accusantium pariatur repudiandae!`,
    //   description:`<p class="highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.</p>
    //               <p>The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
    //               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>`,
    //   socialLink:socialLink ,
    //   tags:` <span>Tags:</span><br></br>
    //   <span>Advancher</span>
    //   <span>Landscape</span>
    //   <span>Travel</span>`,
    //   keywords:['Web','Agency','Company','Creative','Html','Marketing','Social Media','Branding'],
    //   comments:[],
    //   creator:{...creator4,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.'},
    //   createdAt: new Date("2025-8-25")
    // }
  ]

  export default blogsArray;
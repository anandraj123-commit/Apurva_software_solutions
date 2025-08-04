import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box } from '@mui/material';

const ImageCarousel= ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    
      const data = [
       {
            img:"img/testimonials/testimonials-1.jpg",
            name:'Saul Goodman',
            designation:'Ceo &amp; Founder'
       },
        {
            img:"img/testimonials/testimonials-2.jpg",
            name:'Sara Wilsson',
            designation:'Designer'
        },
        {
            img:"img/testimonials/testimonials-2.jpg",
            name:'Jena Karlis',
            designation:'Store Owner'
        },
        {
            img:"img/testimonials/testimonials-2.jpg",
            name:'Matt Brandon',
            designation:'Freelancer'
        },
        {
            img:"img/testimonials/testimonials-2.jpg",
            name:'John Larson',
            designation:'Entrepreneur'
        }
      ];
    
      return (
        <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
        <Slider {...settings}>
          {data.map((detail, index) => (
            <Box key={index}>
              {/* <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} /> */}
              <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={detail.img} className="testimonial-img" alt="" />
                                    <h3>{detail.name}</h3>
                                    <h4>{detail.designation}</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
            </Box>
          ))}
        </Slider>
      </Box>
      );
    };


export default ImageCarousel;
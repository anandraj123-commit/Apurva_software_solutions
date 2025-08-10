import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
import '../assets/css/slider.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const data = [
    {
      img: "img/testimonials/ravi.jpg",
      name: "Manohar S Lal",
      designation: "Product Manager",
      content:
        "Responsible for defining the vision and strategy of a product and guiding its development from concept to launch. They act as a bridge between business, design, and engineering teams to ensure the product meets user needs and business goals.",
    },
    {
      img: "img/testimonials/testimonials-1.jpg",
      name: "Rohit Agarwal",
      designation: "Software Developer",
      content:
        "Creates, tests, and maintains software applications or systems tailored to user needs. They write clean, efficient code and collaborate with teams to turn requirements into reliable digital solutions.",
    },
    {
      img: "img/testimonials/testimonials-1.jpg",
      name: "Rajat Sharma",
      designation: "Back End Developer",
      content:
        "Builds and Maintains the server-side components of web applications, including databases, APIs, and application logic. They ensure data is processed correctly and securely, enabling seamless functionality for the front end.",
    },
    {
      img: "img/testimonials/yaan.jpg",
      name: "Avishek Singh",
      designation: "Ui Designer",
      content:
        "Responsible for designing the look and feel of a digital product, focusing on visual elements like buttons, icons, spacing, and color schemes. Their goal is to create interfaces that are both aesthetically pleasing and easy to navigate for users.",
    },
    {
      img: "img/testimonials/testimonials-1.jpg",
      name: "Deepak Joshi",
      designation: "Product Quality Analyst",
      content:
        "Ensures that a product meets the required quality standards before it reaches users. They perform testing, identify bugs, and work with development teams to enhance performance, reliability, and user satisfaction.",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        px: 2, // padding left/right for small screens
        width: "100%",
        // Add relative positioning so arrows are positioned relative to this container
        position: "relative",
        // Add extra padding on left and right to avoid arrows getting cut
        // Adjust padding responsively for smaller screens
        "& .slick-arrow": {
          zIndex: 1,
          width: 30,
          height: 30,
          "&:before": {
            fontSize: 30,
            color: "#333",
          },
        },
        "& .slick-prev": {
          left: { xs: 0, sm: -35 },
        },
        "& .slick-next": {
          right: { xs: 0, sm: -35 },
        },
        // Make sure dots have enough bottom margin on mobile
        "& .slick-dots": {
          bottom: 10,
        },
      }}
    >
      <Slider {...settings}>
        {data.map((detail, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              px: { xs: 1, sm: 3 },
            }}
          >
            <div className="testimonial-item">
              <img
                src={detail.img}
                alt={detail.name}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 15px auto",
                  display: "block",
                }}
              />
              <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>
                {detail.name}
              </h3>
              <h4
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "10px",
                }}
              >
                {detail.designation}
              </h4>
              <div
                className="stars"
                style={{ marginBottom: "15px", color: "#ffb400" }}
              >
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.4,
                  padding: "0 10px",
                }}
              >
                <i className="bi bi-quote quote-icon-left"></i>
                <span>{detail.content}</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;

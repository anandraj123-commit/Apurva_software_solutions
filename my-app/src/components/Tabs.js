import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PortfolioBasicTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',margin:"50px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="SOFTWARE APPLICATIONS" {...a11yProps(1)} />
          <Tab label="CLOUD SOLUTIONS" {...a11yProps(2)} />
          <Tab label="CYBER SECURITY" {...a11yProps(3)} />
          <Tab label="DIGITAL MARKETING" {...a11yProps(4)} />
          <Tab label="MAINTENANCE & SUPPORT" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-1.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web Applications</h4>
                <p>Software accessed via browser.</p>
                {/* <a href="img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Mobile Applications</h4>
                <p>Software for mobile devices.</p>
                {/* <a href="img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Desktop Applications</h4>
                <p>Software installed on computer.</p>
                {/* <a href="img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/product-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Progressive Web Applications(PWA)</h4>
                <p>Web apps with advantages.</p>
                {/* <a href="img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>E-commerce Web Application</h4>
                <p>Buy and sell online.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Content Management System App</h4>
                <p>Create, manage content easily.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Storage Solutions</h4>
                <p>Store files in cloud.</p>
                {/* <a href="img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Database Solutions</h4>
                <p>Manage databases via internet.</p>
                {/* <a href="img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Security Solutions</h4>
                <p>Protect data and infrastructure.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-1.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web Applications</h4>
                <p>Software accessed via browser.</p>
                {/* <a href="img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Mobile Applications</h4>
                <p>Software for mobile devices.</p>
                {/* <a href="img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Desktop Applications</h4>
                <p>Software installed on computer.</p>
                {/* <a href="img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/product-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Progressive Web Applications(PWA)</h4>
                <p>Web apps with advantages.</p>
                {/* <a href="img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>E-commerce Web Application</h4>
                <p>Buy and sell online.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Content Management System App</h4>
                <p>Create, manage content easily.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Storage Solutions</h4>
                <p>Store files in cloud.</p>
                {/* <a href="img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Database Solutions</h4>
                <p>Manage databases via internet.</p>
                {/* <a href="img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Cloud Security Solutions</h4>
                <p>Protect data and infrastructure.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Network Security</h4>
                <p>Protects internal network systems.</p>
                {/* <a href="img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Endpoint Security</h4>
                <p>Secures individual endpoint devices.</p>
                {/* <a href="img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Application Security</h4>
                <p>Protects software from threats.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Email Security</h4>
                <p>Protects emails from threats.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Data Loss Prevention (DLP)</h4>
                <p>Prevents unauthorized data leaks.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Antivirus & Anti-malware</h4>
                <p>Detects and removes malware.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Search Engine Optimization (SEO)</h4>
                <p>Improve visibility in search.</p>
                {/* <a href="img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Search Engine Marketing (SEM)</h4>
                <p>Paid advertising on search.</p>
                {/* <a href="img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Social Media Marketing (SMM)</h4>
                <p>Promote brand through social.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Content Marketing</h4>
                <p>Create, share valuable content.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Pay-Per-Click (PPC)</h4>
                <p>Pay only per click.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Affiliate Marketing</h4>
                <p>Earn through partner referrals.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div class="row gy-4 isotope-container">
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Software Updates</h4>
                <p>Enhance features and security.</p>
                {/* <a href="img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/books-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Performance Monitoring</h4>
                <p>Track system performance metrics.</p>
                {/* <a href="img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Backup and Recovery</h4>
                <p>Restore data after loss.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Bug Fixing</h4>
                <p>Identify and resolve issues.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Security Patching</h4>
                <p>Fix vulnerabilities with updates.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-content h-100">
              <img src="img/portfolio/app-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>User Support & Helpdesk</h4>
                <p>Assist users with issues.</p>
                {/* <a href="img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                {/* <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
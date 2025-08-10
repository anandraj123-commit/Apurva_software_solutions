import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import '../assets/css/Tabs.css';

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
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>{children}</Box>
      )}
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

  useEffect(() => {
    if (props?.tabArgument?.value) {
      setValue(+props.tabArgument.value);
    }
  }, [props]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin: { xs: '10px 5px', sm: '20px 10px', md: '50px' } }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="portfolio tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: { xs: 'nowrap', sm: 'wrap' },
              justifyContent: { xs: 'flex-start', sm: 'center' },
            },
            '& .MuiTab-root': {
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
              padding: { xs: '8px 10px', sm: '10px 12px', md: '12px 16px' },
              minWidth: { xs: '80px', sm: '100px' },
              textTransform: 'none',
              whiteSpace: 'nowrap',
              margin: { xs: '0 4px', sm: '0 8px' },
            },
            '& .MuiTabs-scroller': {
              overflowX: 'auto !important',
            },
          }}
        >
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="SOFTWARE" {...a11yProps(1)} />
          <Tab label="CLOUD" {...a11yProps(2)} />
          <Tab label="SECURITY" {...a11yProps(3)} />
          <Tab label="MARKETING" {...a11yProps(4)} />
          <Tab label="SUPPORT" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/performance_monitoring.jpg" className="img-fluid" alt="Performance Monitoring" loading="lazy" />
              <div className="portfolio-info">
                <h4>Performance Monitoring</h4>
                <p>Track system performance metrics.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/backup_recovery.jpg" className="img-fluid" alt="Backup and Recovery" loading="lazy" />
              <div className="portfolio-info">
                <h4>Backup and Recovery</h4>
                <p>Restore data after loss.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/bug_fixing.jpg" className="img-fluid" alt="Bug Fixing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Bug Fixing</h4>
                <p>Identify and resolve issues.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/security_patching.jpg" className="img-fluid" alt="Security Patching" loading="lazy" />
              <div className="portfolio-info">
                <h4>Security Patching</h4>
                <p>Fix vulnerabilities with updates.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/user_support_helpDesk.jpg" className="img-fluid" alt="User Support & Helpdesk" loading="lazy" />
              <div className="portfolio-info">
                <h4>User Support & Helpdesk</h4>
                <p>Assist users with issues.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/web_app.jpg" className="img-fluid" alt="Web Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Web Applications</h4>
                <p>Software accessed via browser.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/mobile_app.jpg" className="img-fluid" alt="Mobile Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Mobile Applications</h4>
                <p>Software for mobile devices.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/desktop_app.jpg" className="img-fluid" alt="Desktop Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Desktop Applications</h4>
                <p>Software installed on computer.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-product">
            <div className="portfolio-content">
              <img src="img/portfolio/pwb.jpg" className="img-fluid" alt="Progressive Web Applications (PWA)" loading="lazy" />
              <div className="portfolio-info">
                <h4>Progressive Web Apps (PWA)</h4>
                <p>Web apps with enhanced features.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/e-commerce_app.jpg" className="img-fluid" alt="E-commerce Web Application" loading="lazy" />
              <div className="portfolio-info">
                <h4>E-commerce Web App</h4>
                <p>Buy and sell online.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/content_mgmt.jpg" className="img-fluid" alt="Content Management System App" loading="lazy" />
              <div className="portfolio-info">
                <h4>Content Management App</h4>
                <p>Create, manage content easily.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/data_loss_prevention.jpg" className="img-fluid" alt="Cloud Storage Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Storage Solutions</h4>
                <p>Store files in cloud.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/end_security.jpg" className="img-fluid" alt="Cloud Database Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Database Solutions</h4>
                <p>Manage databases via internet.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/cloud_security.jpg" className="img-fluid" alt="Cloud Security Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Security Solutions</h4>
                <p>Protect data and infrastructure.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/network_security.jpg" className="img-fluid" alt="Network Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Network Security</h4>
                <p>Protects internal network systems.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/end_security.jpg" className="img-fluid" alt="Endpoint Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Endpoint Security</h4>
                <p>Secures individual endpoint devices.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/Application_security.jpg" className="img-fluid" alt="Application Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Application Security</h4>
                <p>Protects software from threats.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/email_security.jpg" className="img-fluid" alt="Email Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Email Security</h4>
                <p>Protects emails from threats.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/data_loss_prevention.jpg" className="img-fluid" alt="Data Loss Prevention (DLP)" loading="lazy" />
              <div className="portfolio-info">
                <h4>Data Loss Prevention (DLP)</h4>
                <p>Prevents unauthorized data leaks.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/antivirus_antimalware.jpg" className="img-fluid" alt="Antivirus & Anti-malware" loading="lazy" />
              <div className="portfolio-info">
                <h4>Antivirus & Anti-malware</h4>
                <p>Detects and removes malware.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/seo.jpg" className="img-fluid" alt="Search Engine Optimization (SEO)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SEO</h4>
                <p>Improve visibility in search.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/sem.jpg" className="img-fluid" alt="Search Engine Marketing (SEM)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SEM</h4>
                <p>Paid advertising on search.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/smm.jpg" className="img-fluid" alt="Social Media Marketing (SMM)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SMM</h4>
                <p>Promote brand through social.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/content_marketting.jpg" className="img-fluid" alt="Content Marketing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Content Marketing</h4>
                <p>Create, share valuable content.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/pay_per_click.jpg" className="img-fluid" alt="Pay-Per-Click (PPC)" loading="lazy" />
              <div className="portfolio-info">
                <h4>PPC</h4>
                <p>Pay only per click.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/affiliate_marketing.jpg" className="img-fluid" alt="Affiliate Marketing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Affiliate Marketing</h4>
                <p>Earn through partner referrals.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/software_updates.jpg" className="img-fluid" alt="Software Updates" loading="lazy" />
              <div className="portfolio-info">
                <h4>Software Updates</h4>
                <p>Enhance features and security.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/web_app.jpg" className="img-fluid" alt="Web Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Web Applications</h4>
                <p>Software accessed via browser.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/mobile_app.jpg" className="img-fluid" alt="Mobile Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Mobile Applications</h4>
                <p>Software for mobile devices.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/desktop_app.jpg" className="img-fluid" alt="Desktop Applications" loading="lazy" />
              <div className="portfolio-info">
                <h4>Desktop Applications</h4>
                <p>Software installed on computer.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-product">
            <div className="portfolio-content">
              <img src="img/portfolio/pwb.jpg" className="img-fluid" alt="Progressive Web Applications (PWA)" loading="lazy" />
              <div className="portfolio-info">
                <h4>Progressive Web Apps (PWA)</h4>
                <p>Web apps with enhanced features.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/e-commerce_app.jpg" className="img-fluid" alt="E-commerce Web Application" loading="lazy" />
              <div className="portfolio-info">
                <h4>E-commerce Web App</h4>
                <p>Buy and sell online.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/content_mgmt.jpg" className="img-fluid" alt="Content Management System App" loading="lazy" />
              <div className="portfolio-info">
                <h4>Content Management App</h4>
                <p>Create, manage content easily.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/data_loss_prevention.jpg" className="img-fluid" alt="Cloud Storage Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Storage Solutions</h4>
                <p>Store files in cloud.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/end_security.jpg" className="img-fluid" alt="Cloud Database Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Database Solutions</h4>
                <p>Manage databases via internet.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/cloud_security.jpg" className="img-fluid" alt="Cloud Security Solutions" loading="lazy" />
              <div className="portfolio-info">
                <h4>Cloud Security Solutions</h4>
                <p>Protect data and infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/network_security.jpg" className="img-fluid" alt="Network Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Network Security</h4>
                <p>Protects internal network systems.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/end_security.jpg" className="img-fluid" alt="Endpoint Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Endpoint Security</h4>
                <p>Secures individual endpoint devices.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/Application_security.jpg" className="img-fluid" alt="Application Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Application Security</h4>
                <p>Protects software from threats.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/email_security.jpg" className="img-fluid" alt="Email Security" loading="lazy" />
              <div className="portfolio-info">
                <h4>Email Security</h4>
                <p>Protects emails from threats.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/data_loss_prevention.jpg" className="img-fluid" alt="Data Loss Prevention (DLP)" loading="lazy" />
              <div className="portfolio-info">
                <h4>Data Loss Prevention (DLP)</h4>
                <p>Prevents unauthorized data leaks.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/antivirus_antimalware.jpg" className="img-fluid" alt="Antivirus & Anti-malware" loading="lazy" />
              <div className="portfolio-info">
                <h4>Antivirus & Anti-malware</h4>
                <p>Detects and removes malware.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/seo.jpg" className="img-fluid" alt="Search Engine Optimization (SEO)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SEO</h4>
                <p>Improve visibility in search.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/sem.jpg" className="img-fluid" alt="Search Engine Marketing (SEM)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SEM</h4>
                <p>Paid advertising on search.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/smm.jpg" className="img-fluid" alt="Social Media Marketing (SMM)" loading="lazy" />
              <div className="portfolio-info">
                <h4>SMM</h4>
                <p>Promote brand through social.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/content_marketting.jpg" className="img-fluid" alt="Content Marketing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Content Marketing</h4>
                <p>Create, share valuable content.</p>
              </div>
            </div>
          </div>
          <div className="col-13 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/pay_per_click.jpg" className="img-fluid" alt="Pay-Per-Click (PPC)" loading="lazy" />
              <div className="portfolio-info">
                <h4>PPC</h4>
                <p>Pay only per click.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/affiliate_marketing.jpg" className="img-fluid" alt="Affiliate Marketing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Affiliate Marketing</h4>
                <p>Earn through partner referrals.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className="row gy-3 isotope-container">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content">
              <img src="img/portfolio/software_updates.jpg" className="img-fluid" alt="Software Updates" loading="lazy" />
              <div className="portfolio-info">
                <h4>Software Updates</h4>
                <p>Enhance features and security.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-books">
            <div className="portfolio-content">
              <img src="img/portfolio/performance_monitoring.jpg" className="img-fluid" alt="Performance Monitoring" loading="lazy" />
              <div className="portfolio-info">
                <h4>Performance Monitoring</h4>
                <p>Track system performance metrics.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/backup_recovery.jpg" className="img-fluid" alt="Backup and Recovery" loading="lazy" />
              <div className="portfolio-info">
                <h4>Backup and Recovery</h4>
                <p>Restore data after loss.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/bug_fixing.jpg" className="img-fluid" alt="Bug Fixing" loading="lazy" />
              <div className="portfolio-info">
                <h4>Bug Fixing</h4>
                <p>Identify and resolve issues.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/security_patching.jpg" className="img-fluid" alt="Security Patching" loading="lazy" />
              <div className="portfolio-info">
                <h4>Security Patching</h4>
                <p>Fix vulnerabilities with updates.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 portfolio-item isotope-item filter-app">
            <div className="portfolio-content">
              <img src="img/portfolio/user_support_helpDesk.jpg" className="img-fluid" alt="User Support & Helpdesk" loading="lazy" />
              <div className="portfolio-info">
                <h4>User Support & Helpdesk</h4>
                <p>Assist users with issues.</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
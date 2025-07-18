import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CategoryIcon from "@mui/icons-material/Category";
import LightModeIcon from "@mui/icons-material/LightMode";
import CommandIcon from "@mui/icons-material/KeyboardCommandKey";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ---- colors --------------------------------------------------------------
const ORANGE = "#fb4a1e";
const DARK = "#1b3442";

// ---- custom styled MUI Tabs & Tab -----------------------------------------
const CustomTabs = styled(Tabs)(({ theme }) => ({
  width: "100%",
  ".MuiTabs-indicator": { display: "none" },
  ".MuiTabs-flexContainer": {
    display: "flex",
    width: "100%",
    gap: theme.spacing(2)
  }
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  flex: 1,
  minHeight: 120,
  textAlign: "left",
  alignItems: "flex-start",
  padding: theme.spacing(3),
  border: "1px solid #dcdcdc",
  backgroundColor: "#fff",
  color: DARK,
  "& .MuiSvgIcon-root": {
    fontSize: 40,
    marginRight: theme.spacing(2),
    color: DARK
  },
  "&.Mui-selected": {
    backgroundColor: ORANGE,
    color: "#fff",
    "& .MuiSvgIcon-root": { color: "#fff" }
  }
}));

function TabPanel({ value, index, children }) {
  return value === index ? <Box sx={{ py: 4 }}>{children}</Box> : null;
}

const FeatureContent = ({ title, italic, points = [], paragraph, image }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 4,
      alignItems: "center"
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {italic && (
        <Typography fontStyle="italic" gutterBottom>
          {italic}
        </Typography>
      )}
      <List dense>
        {points.map((text, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: ORANGE }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {paragraph && (
        <Typography mt={2}>
          {paragraph}
        </Typography>
      )}
    </Box>
    <Box sx={{ flex: 1, textAlign: "center" }}>
      <img src={image} alt="feature" style={{ maxWidth: "100%" }} />
    </Box>
  </Box>
);

export default function FeaturesTab() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>
      <CustomTabs value={value} onChange={(_, v) => setValue(v)}>
        <CustomTab
          icon={<Diversity3Icon />}
          label={
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
             Modern Solutions Delivered <br/>
               Innovation Space
              </Typography>
            </Box>
          }
        />
        <CustomTab
          icon={<CategoryIcon />}
          label={
            <Typography variant="subtitle1" fontWeight={600}>
              Real-Time Insights <br /> Core Logic
            </Typography>
          }
        />
        <CustomTab
          icon={<LightModeIcon />}
          label={
            <Typography variant="subtitle1" fontWeight={600}>
              Smart Execution<br />Workspace
            </Typography>
          }
        />
        <CustomTab
          icon={<CommandIcon />}
          label={
            <Typography variant="subtitle1" fontWeight={600}>
              Backend Service Hub
            </Typography>
          }
        />
      </CustomTabs>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <FeatureContent
          title="We deliver trusted, scalable and secure software."
          italic="Transforming ideas into robust, efficient software — we drive innovation, streamline development, and fuel your digital success journey."
          points={[
            "We ensure seamless service delivery with optimized efficiency.",
            "Experience performance-driven solutions with precision and clarity.",
            "We prevent errors and enhance stability for complex challenges.",
            "We build smart, user-friendly software that delivers real results—without compromising on speed, stability, or user experience.."
          ]}
          paragraph="We deliver seamless, secure digital solutions that enhance performance, streamline workflows, and support business growth — with scalable architecture, intuitive design, and a commitment to quality, innovation, and user satisfaction."
          image="/img/working-1.jpg"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FeatureContent
          title="We resolve complex technical issues with precision and accountability."
          italic="Delivering modern applications through agile development, user-focused design, and scalable architecture for long-term business success and innovation."
          points={[
           "We build smart software for scalable and seamless performance.", 
  "Delivering clean user interfaces with secure backend integration.",
  "Our experts craft tailored digital solutions that handle complex problems with speed, clarity, and business-driven logic.", 
  "We design innovative, reliable software that empowers businesses to adapt, grow, and lead with confidence across platforms — delivering performance, usability, and results every step of the way." // 28 words
          ]}
          paragraph="We build secure, high-performance software that enhances user experience, streamlines operations, and drives digital transformation—engineered with precision, tested for quality, and designed to meet modern business needs without compromise."
          image="/img/working-2.jpg"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
  <FeatureContent
    title="Scalable systems that transform complexity into elegant software experiences"
    italic="We develop intuitive, high-performance applications through agile methods and expert engineering across all modern digital platforms."
    points={[
      "We build fast, scalable products that meet business-specific performance goals.",
      "User-centric interfaces crafted with precision, performance, and usability first.",
      "Engineered solutions that solve tough software problems with clarity and speed.",
      "Engineered solutions that solve tough software problems with clarity and speed."
    ]}
    paragraph="Our platforms are tailored to streamline operations, support innovation, and deliver secure, responsive digital solutions for clients worldwide through tested frameworks and modern development best practices."
    image="/img/working-3.jpg"
  />
</TabPanel>
<TabPanel value={value} index={3}>
  <FeatureContent
    title="Streamlined digital tools built to solve real challenges effortlessly"
    italic="We craft tailored software that enhances efficiency, flexibility, and growth across fast-moving digital ecosystems and modern platforms."
    points={[
      "We create reliable systems to simplify complex business operations.",
      "Precise interfaces engineered for usability and optimal interaction.",
      "Our engineers architect scalable platforms with intuitive design, strong security, and smooth performance across various digital environments.",
      "Robust architecture resolves challenges with efficient, user-focused logic."
    ]}
    paragraph="We deliver dependable digital solutions built for speed, quality, and growth — reducing friction, enhancing experience, and enabling seamless collaboration across your core business systems."
    image="/img/working-4.jpg"
  />
</TabPanel>
    </Box>
  );
}

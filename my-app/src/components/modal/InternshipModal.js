import {
  Modal, Box, Typography, IconButton, TextField,
  MenuItem, Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useCallback } from "react";
import { keyframes } from "@emotion/react";
import LoaderOverlay from "../loader/Loader";
import AlertBox from "../AlertBox";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const semesters = [
  "1st Semester", "2nd Semester", "3rd Semester", "4th Semester",
  "5th Semester", "6th Semester", "7th Semester", "8th Semester", "Passed Out"
];

const internshipAreas = [
  "Software Application", "Cloud Solutions", "Cyber Security",
  "Digital Marketing", "Maintenance & Support"
];

const softwareTopics = [
  "MEAN Stack", "MERN Stack", "MEVN Stack",
  "Plain Javascript", "Hybrid Mobile App using Ionic"
];

export default function InternshipModal({ onClose, onSubmitFormRequest }) {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "", college: "", semester: "", mobile: "", email: "",
    address: "", internshipOn: "", topic: "", resumeUrl: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  });

  // Set internship starting date heading
  useEffect(() => {
    const today = new Date();
    let internshipDate;

    if (today.getDate() <= 1) internshipDate = new Date(today.getFullYear(), today.getMonth(), 1);
    else if (today.getDate() <= 15) internshipDate = new Date(today.getFullYear(), today.getMonth(), 15);
    else internshipDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    setHeading(`Internship starting on ${internshipDate.toLocaleDateString("en-IN", { day: "numeric", month: "long" })}`);
  }, []);

  // Update form data on input change
  const handleChange = useCallback(({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  // Mark fields touched on blur
  const handleBlur = useCallback(({ target: { name } }) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  // Validation logic
  const validate = useCallback(() => {
    const newErrors = {};
    const { name, college, semester, mobile, email, address, internshipOn, topic, resumeUrl } = formData;

    if (!name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(name.trim())) newErrors.name = "Name should contain only letters";

    if (!college.trim()) newErrors.college = "College name is required";

    if (!semester) newErrors.semester = "Please select your semester";

    if (!mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(mobile.trim())) newErrors.mobile = "Enter a valid 10-digit mobile number";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) newErrors.email = "Enter a valid email address";

    if (!address.trim()) newErrors.address = "Address is required";

    if (!internshipOn) newErrors.internshipOn = "Please select an internship area";

    if (internshipOn === "Software Application" && !topic) newErrors.topic = "Please select a topic";

    if (!resumeUrl.trim()) newErrors.resumeUrl = "Resume URL is required";
    else if (!/^https?:\/\/.+/.test(resumeUrl.trim())) newErrors.resumeUrl = "Enter a valid URL";

    return newErrors;
  }, [formData]);

  // Re-validate on formData change
  useEffect(() => {
    const errs = validate();
    setErrors(errs);
    setIsFormValid(Object.keys(errs).length === 0);
  }, [formData, validate]);

  useEffect(() => {
    if (status.success || status.error) {
      const timer = setTimeout(() => {
        onClose?.();
        setStatus({ loading: false, error: '', success: '' });
        setLoading(false);
      }, 3000); // 3 seconds delay to show alert
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  const handleSubmit = async () => {
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    const errs = validate();

    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setStatus({ loading: true, error: '', success: '' });

    try {
      const { loading, success, error } = await onSubmitFormRequest(formData, 'INTERNSHIP');
      setLoading(loading);
      setStatus({ loading, error: error || '', success: success || '' });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      {status.success && (
        <AlertBox type="success" message="✅ Internship Request Submitted Successfully!" duration="3000" />
      )}
      {status.loading && (
        <AlertBox type="loading" message="⏳ Sending, please wait..." duration="3000" />
      )}
      {status.error && (
        <AlertBox type="error" message="❌ Something went wrong!" duration="3000" />
      )}

      <Modal open onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: "50vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 3, fontWeight: "bold" }}
            component="h2"
          >
            Apurva Software Internship Program
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 3, animation: `${blink} 1s infinite`, color: "#ff4a17" }}
          >
            {heading}
          </Typography>

          <TextField
            label="Name of Candidate"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            margin="normal"
          />

          <TextField
            label="College Name"
            name="college"
            value={formData.college}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.college && Boolean(errors.college)}
            helperText={touched.college && errors.college}
            margin="normal"
          />

          <TextField
            select
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.semester && Boolean(errors.semester)}
            helperText={touched.semester && errors.semester}
            margin="normal"
          >
            {semesters.map((sem) => (
              <MenuItem key={sem} value={sem}>
                {sem}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Internship On"
            name="internshipOn"
            value={formData.internshipOn}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.internshipOn && Boolean(errors.internshipOn)}
            helperText={touched.internshipOn && errors.internshipOn}
            margin="normal"
          >
            {internshipAreas.map(area => (
              <MenuItem key={area} value={area}>
                {area}
              </MenuItem>
            ))}
          </TextField>

          {formData.internshipOn === "Software Application" && (
            <TextField
              select
              label="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.topic && Boolean(errors.topic)}
              helperText={touched.topic && errors.topic}
              margin="normal"
            >
              {softwareTopics.map(topic => (
                <MenuItem key={topic} value={topic}>
                  {topic}
                </MenuItem>
              ))}
            </TextField>
          )}

          <TextField
            label="Resume URL"
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.resumeUrl && Boolean(errors.resumeUrl)}
            helperText={touched.resumeUrl && errors.resumeUrl}
            margin="normal"
          />

          <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
            Contact Details
          </Typography>

          <TextField
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.mobile && Boolean(errors.mobile)}
            helperText={touched.mobile && errors.mobile}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email ID"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
          >
            Submit
          </Button>
        </Box>
      </Modal>
      {loading && <LoaderOverlay />}
    </>
  );
}

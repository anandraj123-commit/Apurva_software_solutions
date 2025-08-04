// components/modal/InternshipModal.jsx
import {
  Modal, Box, Typography, IconButton, TextField,
  MenuItem, Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import LoaderOverlay from "../loader/Loader";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const semesters = [
  "1st Semester", "2nd Semester", "3rd Semester", "4th Semester",
  "5th Semester", "6th Semester", "7th Semester", "8th Semester", "Passed Out"
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

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    let internshipDate;

    if (day <= 1) internshipDate = new Date(year, month, 1);
    else if (day <= 15) internshipDate = new Date(year, month, 15);
    else internshipDate = new Date(year, month + 1, 1);
    const formatted = internshipDate.toLocaleDateString("en-IN", {
      day: "numeric", month: "long"
    });
    setHeading(`Internship starting on ${formatted}`);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) newErrors.name = "Name should contain only letters";
    if (!formData.college.trim()) newErrors.college = "College name is required";
    if (!formData.semester) newErrors.semester = "Please select your semester";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile.trim())) newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email address";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.internshipOn) newErrors.internshipOn = "Please select an internship area";
    if (formData.internshipOn === "Software Application" && !formData.topic) newErrors.topic = "Please select a topic";
    if (!formData.resumeUrl.trim()) newErrors.resumeUrl = "Resume URL is required";
    else if (!/^https?:\/\/.+/.test(formData.resumeUrl.trim())) newErrors.resumeUrl = "Enter a valid URL";
    return newErrors;
  };

  useEffect(() => {
    const errs = validate();
    setErrors(errs);
    setIsFormValid(Object.keys(errs).length === 0);
  }, [formData]);

  const handleSubmit = async () => {
    setLoading(true);
    const errs = validate();
    setErrors(errs);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(errs).length === 0) {
      const {loading, success, error} = await onSubmitFormRequest(formData,'INTERNSHIP');
      setLoading(loading);
      if (success) {
        alert(success);
        onClose && onClose();
      }
      else if(error){
        alert(error);
        onClose && onClose();
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoaderOverlay />}
      <Modal open onClose={onClose}>
        <Box sx={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", width: 500, height: "50vh",
          overflowY: "auto", bgcolor: "background.paper", borderRadius: 2,
          boxShadow: 24, p: 4
        }}>
          <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
            Apurva Software Internship Program
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 3, animation: `${blink} 1s infinite`, color: '#ff4a17' }}>
            {heading}
          </Typography>

          <TextField label="Name of Candidate" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.name && !!errors.name} helperText={touched.name && errors.name} margin="normal" />
          <TextField label="College Name" name="college" value={formData.college} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.college && !!errors.college} helperText={touched.college && errors.college} margin="normal" />
          <TextField select label="Semester" name="semester" value={formData.semester} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.semester && !!errors.semester} helperText={touched.semester && errors.semester} margin="normal">
            {semesters.map((sem) => (<MenuItem key={sem} value={sem}>{sem}</MenuItem>))}
          </TextField>
          <TextField select label="Internship On" name="internshipOn" value={formData.internshipOn} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.internshipOn && !!errors.internshipOn} helperText={touched.internshipOn && errors.internshipOn} margin="normal">
            <MenuItem value="Software Application">Software Application</MenuItem>
            <MenuItem value="Cloud Solutions">Cloud Solutions</MenuItem>
            <MenuItem value="Cyber Security">Cyber Security</MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="Maintenance & Support">Maintenance & Support</MenuItem>
          </TextField>
          {formData.internshipOn === "Software Application" && (
            <TextField select label="Topic" name="topic" value={formData.topic} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.topic && !!errors.topic} helperText={touched.topic && errors.topic} margin="normal">
              <MenuItem value="MEAN Stack">MEAN Stack</MenuItem>
              <MenuItem value="MERN Stack">MERN Stack</MenuItem>
              <MenuItem value="MEVN Stack">MEVN Stack</MenuItem>
              <MenuItem value="Plain Javascript">Plain Javascript</MenuItem>
              <MenuItem value="Hybrid Mobile App using Ionic">Hybrid Mobile App using Ionic</MenuItem>
            </TextField>
          )}
          <TextField label="Resume URL" name="resumeUrl" value={formData.resumeUrl} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.resumeUrl && !!errors.resumeUrl} helperText={touched.resumeUrl && errors.resumeUrl} margin="normal" />
          <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>Contact Details</Typography>
          <TextField label="Mobile Number" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.mobile && !!errors.mobile} helperText={touched.mobile && errors.mobile} sx={{ mb: 2 }} />
          <TextField label="Email ID" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.email && !!errors.email} helperText={touched.email && errors.email} sx={{ mb: 2 }} />
          <TextField label="Address" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} fullWidth error={touched.address && !!errors.address} helperText={touched.address && errors.address} sx={{ mb: 2 }} />
          <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleSubmit} disabled={!isFormValid}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
}

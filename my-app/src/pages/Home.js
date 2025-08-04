import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import useEmailSender from '../components/hooks/useEmailSender';
import { useSearchParams } from "react-router-dom";
const Home = ()=>{
    const [searchParams] = useSearchParams();
    console.log('searchParams',searchParams);
    const { sendEmails } = useEmailSender();
    const modalRef = useRef();
  
    function handleInternshipModal(){
      modalRef.current.open()
    }
    
    async function onSubmitFormRequest(formData,INFOTYPE) {
      console.log("formData,INFOTYPE",formData,INFOTYPE);
      return await sendEmails(formData,INFOTYPE);
    }
   return (
    <>
      <Header handleInternshipModal={handleInternshipModal}/>
      <Main onSubmitFormRequest={onSubmitFormRequest} ref={modalRef}/>
      <Footer onSubmitFormRequest={onSubmitFormRequest}/>
    </>
   )
}

export default Home;
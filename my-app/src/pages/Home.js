import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import {useRef,useEffect} from 'react';
import useEmailSender from '../components/hooks/useEmailSender';
import { useLocation } from "react-router-dom";
const Home = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tabArgument = {
        portfolio: queryParams.get('portfolio'),
        value: queryParams.get('value')
    }

    useEffect(()=>{
        if(location.hash){
            const element = document.getElementById(location.hash.substring(1));
        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    },[location])

    const { sendEmails } = useEmailSender();
    const modalRef = useRef();
  
    function handleInternshipModal(){
      modalRef.current.open()
    }
    
    async function onSubmitFormRequest(formData,INFOTYPE) {
      return await sendEmails(formData,INFOTYPE);
    }
   return (
    <>
      <Header handleInternshipModal={handleInternshipModal}/>
      <Main onSubmitFormRequest={onSubmitFormRequest} ref={modalRef} tabArgument={tabArgument}/>
      <Footer onSubmitFormRequest={onSubmitFormRequest} handleInternshipModal={handleInternshipModal}/>
    </>
   )
}

export default Home;
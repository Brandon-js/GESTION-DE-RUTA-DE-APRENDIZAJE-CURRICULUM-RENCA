import React from "react";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Accordion from "../components/AccordionFAQ/Accordion";
import ContactForm from "../components/ContactForm/ContactForm";


const FAQ = () => {
    return (
        <>
            <Navbar />
            <Accordion />
            <ContactForm />
            <Footer />
        </>
    )
}

export default FAQ
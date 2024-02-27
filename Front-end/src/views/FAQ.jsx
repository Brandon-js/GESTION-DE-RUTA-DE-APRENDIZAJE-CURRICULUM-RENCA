import React from "react";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Accordion from "../components/AccordionFAQ/Accordion";


const FAQ = () => {
    return (
        <>
            <Navbar />
            <h1>Preguntas Frecuentes</h1>
            <Accordion />
            <Footer />
        </>
    )
}

export default FAQ
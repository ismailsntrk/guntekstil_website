import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import coil from '../../../assets/coil.jpg'
import "./Form.scss";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
  const toggle = () => setCapcthaDone((prevState) => !prevState);
  const recaptchaRef = React.createRef();
  const form = useRef();
  const [modal, setModal] = useState(false);

  const toggle2 = () => setModal(!modal);
  const [capcthaIsDone, setCapcthaDone] = useState(false);
  function onChange() {
    toggle();
  }

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqdcdff",
        "template_5y7myvg",
        form.current,
        "qO6ce20J10NxIRFOV"
      )
      .then(
        (result) => {
         console.log(result)
         if(result.status===200){
          setModal(true);
         }
        },
        (error) => {
          if(error.status===200){
            setModal(true);
           }
        }
      );
    e.target.reset();
  };
  return (
    <div id="form-cont">
      <div id="form-items">
        <form ref={form} onSubmit={sendEmail} id="form">
          <div id="fname-lname">
            <label htmlFor="fname">
              Name Surname:
              <input
                maxLength={25}
                required
                minLength={5}
                type="text"
                id="fname"
                name="fname"
               
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Email:
              <input
             
                minLength={10}
                required
                type="email"
                maxLength={40}
                id="femail"
                name="femail"
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Telefon:
              <input
               
                required
                minLength={10}
                maxLength={15}
                type="tel"
                id="ftel"
                name="ftel"
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Mesajınız:
              <textarea
                style={{ width: "100%" }}
                required
                maxLength={200}
                type="textarea"
                id="fmessage"
                name="fmessage"
              />
            </label>
          </div>
          <ReCAPTCHA
            sitekey="6LeIm4klAAAAALyrQZEGb68urjLuJ8kolA0fpB49"
            //6LdPlYklAAAAAH6jxgl3_lvjtGGeWlEal5Yf4oua
            //6LdPlYklAAAAAKRXV4Z2RXd-UNedIWoGs7DgtOMU
            ref={recaptchaRef}
            onChange={onChange}
          />

<div id="fname-lname">
            {capcthaIsDone === true ? ( 
             <button className="submit-button" type="submit" value="Gönder">
             Gönder <Modal isOpen={modal} toggle={toggle}>
             <ModalHeader toggle={toggle2}>Teşekkürler</ModalHeader>
             <ModalBody>
              Mesajınız İletildi.
             </ModalBody>
       
           </Modal> 
           </button>
            
            ) : (
              <button
                className="submit-button-disabled"
                type="submit"
                disabled
                value="Gönder"
              >
                Gönder
              </button>
            )}
          </div>
        </form>
      </div>
      <div id="contact-page">
      <img id="company-img" src={coil} alt="coil"></img>
        <div id="company-name">
          <div>
            <strong
              style={{
                color: "blue",
                fontSize: "1.4em",
                marginBottom: "1em",
                marginTop: "2em",
              }}
            >
              Email :
            </strong>{" "}
            info@gunteks.com
          </div>
          <div>
            <strong style={{ color: "blue", fontSize: "1.4em" }}>
              Telefon :
            </strong>{" "}
            +90 (276) 333 01 22
          </div>
        </div>
        <div>
          <strong style={{ color: "blue", fontSize: "1.4em" }}>Adres:</strong>
        </div>
        <ul>
          <li>
            Karma Osb. Mah. Halil Kaya Gedik Bulvarı No:265/A UŞAK/TÜRKİYE
          </li>
          <li> FAX: +90 (276) 333 01 22</li>
          <li>TEL: +90 (276) 333 01 22</li>
        </ul>
      </div>
    </div>
  );
};

export default Form;

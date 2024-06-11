import React, { useState } from 'react';
import contact_bg from '../../assets/Image/contact-bg.png';
import { ContactData } from './ContactData';
import axios from 'axios';

const Contact = () => {
    const [formValues, setFormValues] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
      });
      
      const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (event) => {
        
        try {
          event.preventDefault();
          const { Name, Email, Subject, Message } = formValues;
          const response = await axios.post('https://sheet.best/api/sheets/87fa8774-8f15-4e71-9a75-815eeaa6f958', {
            Name,
            Email,
            Subject,
            Message,
          });
          if (response.status === 200) {
            alert('Your message has been sent successfully');
          }
          setFormValues({
            Name: '',
            Email: '',
            Subject: '',
            Message: '',
          });

          window.location.reload();

        }catch (error) {
          alert('Something went wrong, Please try again');
        }
            
      };
      
   

  return (
    <React.Fragment>
      {/*----- Start Contact -----*/}
      <section className="py-24 bg-slate-900 bg-bg-effect-2 bg-no-repeat bg-cover bg-center" id="Contact">
        <div className="container">
          <div className="grid grid-cols-12">
            {/* Start Contact form  */}
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-9 bg-white">
                <h6 className="text-[32px] font-semibold text-black mb-1.5">Get in touch</h6>
                <p className="text-lg mb-8">Our friendly team would love to hear from you.</p>
                <form
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div>
                        <label htmlFor="Name" className="mb-2 inline-block text-slate-700/95">
                          First name
                        </label>
                        <input
                          id="Name"
                          name="Name"
                          placeholder="Name *"
                          className="py-3 px-3 text-base w-full border border-black font-normal outline-none"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div>
                        <label htmlFor="Email" className="mb-2 inline-block text-slate-700/95">
                          Your Email
                        </label>
                        <input
                          id="Email"
                          name="Email"
                          placeholder="Email *"
                          className="py-3 px-3 text-base w-full border border-black font-normal outline-none"
                          type="email"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label htmlFor="Subject" className="mb-2 inline-block text-slate-700/95">
                          Subject
                        </label>
                        <input
                          id="Subject"
                          name="Subject"
                          placeholder="Subject *"
                          className="py-3 px-3 text-base w-full border border-black font-normal outline-none"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label htmlFor="message" className="mb-2 inline-block text-slate-700/95">
                          Your message
                        </label>
                        <textarea
                          id="Message"
                          name="Message"
                          placeholder="Your message *"
                          rows="4"
                          className="py-3 px-3 text-base w-full border border-black font-normal outline-none"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <button className="btn btn-yellow" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact form */}
            {/* Start Contact */}
            <div className="col-span-12 lg:col-span-6 flex">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0">
                <div className="pb-10 ">
                  <img className="w-full" src={contact_bg} title="" alt="" />
                </div>
                <ul>
                  {ContactData.map((e, key) => (
                    <li className="relative flex mb-9" key={key}>
                      <div className={`inline-flex items-center justify-center text-2xl h-14 w-14 cursor-pointer ${e.Bg_color}`}>
                        {e.icon}
                      </div>
                      <div className="flex-1 pl-4 ">
                        <h5 className="mb-2 text-sm font-normal uppercase tracking-wider text-slate-300">{e.name}</h5>
                        <p className="font-medium md:text-xl text-lg text-white max-w-[250px] cursor-pointer">{e.contact}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End Contact */}
          </div>
        </div>
      </section>
      {/*----- End Contact -----*/}
    </React.Fragment>
  );
};

export default Contact;

import React, { useState, ChangeEvent } from "react";
import contact_bg from "../../assets/Image/contact-bg.png";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { toast } from "react-toastify";
import { ContactData } from "./ContactData";
import Image from "next/image";

const schema = z.object({
  Name: z.string().min(3).max(50),
  Email: z.string().email(),
  Subject: z.string().min(5).max(100),
  Message: z.string().min(10).max(500),
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/87fa8774-8f15-4e71-9a75-815eeaa6f958",
        data
      );
      if (response.status === 200) {
        toast.success("Your message has been sent successfully");
        reset(); // Reset form after successful submission
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again");
    }
  };

  return (
    <>
      {/*----- Start Contact -----*/}
      <section
        className="py-24 bg-slate-900 bg-bg-effect-2 bg-no-repeat bg-cover bg-center"
        id="Contact"
      >
        <div className="container">
          <div className="grid grid-cols-12">
            {/* Start Contact form  */}
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-9 bg-white">
                <h6 className="text-[32px] font-semibold text-black mb-1.5">
                  Get in touch
                </h6>
                <p className="text-lg mb-8">
                  Our friendly team would love to hear from you.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div>
                        <label
                          htmlFor="Name"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          First name
                        </label>
                        <input
                          id="Name"
                          {...register("Name", { required: true })}
                          placeholder="Name *"
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.Name ? "border-red-500" : ""
                          }`}
                          type="text"
                        />
                        {errors.Name && (
                          <p className="text-red-500 font-medium mt-1">
                            Name is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div>
                        <label
                          htmlFor="Email"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Your Email
                        </label>
                        <input
                          id="Email"
                          {...register("Email", { required: true })}
                          placeholder="Email *"
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.Email ? "border-red-500" : ""
                          }`}
                          type="email"
                        />
                        {errors.Email && (
                          <p className="text-red-500 font-medium mt-1">
                            Email is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label
                          htmlFor="Subject"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Subject
                        </label>
                        <input
                          id="Subject"
                          {...register("Subject", { required: true })}
                          placeholder="Subject *"
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.Subject ? "border-red-500" : ""
                          }`}
                          type="text"
                        />
                        {errors.Subject && (
                          <p className="text-red-500 font-medium mt-1">
                            Subject is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label
                          htmlFor="Message"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Your message
                        </label>
                        <textarea
                          id="Message"
                          {...register("Message", { required: true })}
                          placeholder="Your message *"
                          rows={4}
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.Message ? "border-red-500" : ""
                          }`}
                        />
                        {errors.Message && (
                          <p className="text-red-500 font-medium mt-1">
                            Message is required
                          </p>
                        )}
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
                  <Image className="w-full" src={contact_bg} title="" alt="" />
                </div>
                <ul>
                  {ContactData.map((e, key) => (
                    <li className="relative flex mb-9" key={key}>
                      <div
                        className={`inline-flex items-center justify-center text-2xl h-14 w-14 cursor-pointer ${e.Bg_color}`}
                      >
                        {e.icon}
                      </div>
                      <div className="flex-1 pl-4 ">
                        <h5 className="mb-2 text-sm font-normal uppercase tracking-wider text-slate-300">
                          {e.name}
                        </h5>
                        <p className="font-medium md:text-xl text-lg text-white max-w-[250px] cursor-pointer">
                          {e.contact}
                        </p>
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
    </>
  );
};

export default Contact;

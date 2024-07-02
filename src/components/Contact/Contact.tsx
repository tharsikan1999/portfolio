import React from "react";
import contact_bg from "../../assets/Image/contact-bg.png";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { toast } from "react-toastify";
import { ContactData } from "./ContactData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post("/api/sendEmail", data);
      if (response.status === 200) {
        toast.success("Your message has been sent successfully");
        reset();
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
        ref={ref}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            {/* Start Contact form  */}
            <div className="col-span-12 lg:col-span-6 ">
              <motion.div
                initial={{ opacity: 0, y: 50, x: -50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 50,
                  x: inView ? 0 : -50,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                className="p-9 bg-white"
              >
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
                          placeholder="Name"
                          {...register("name")}
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.name ? "border-red-500" : ""
                          }`}
                          type="text"
                        />
                        {errors.name && (
                          <p className="text-red-500 font-medium mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Your Email
                        </label>
                        <input
                          id="Email"
                          {...register("email", { required: true })}
                          placeholder="Email *"
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          type="email"
                        />
                        {errors.email && (
                          <p className="text-red-500 font-medium mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Subject
                        </label>
                        <input
                          id="Subject"
                          {...register("subject", { required: true })}
                          placeholder="Subject *"
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.subject ? "border-red-500" : ""
                          }`}
                          type="text"
                        />
                        {errors.subject && (
                          <p className="text-red-500 font-medium mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 inline-block text-slate-700/95 font-medium"
                        >
                          Your message
                        </label>
                        <textarea
                          id="Message"
                          {...register("message", { required: true })}
                          placeholder="Your message *"
                          rows={4}
                          className={`py-3 px-3 text-base w-full border border-black font-normal outline-none ${
                            errors.message ? "border-red-500" : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 font-medium mt-1">
                            {errors.message.message}
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
              </motion.div>
            </div>
            {/* End Contact form */}
            {/* Start Contact */}
            <div className="col-span-12 lg:col-span-6 flex">
              <motion.div
                initial={{ opacity: 0, y: 50, x: 50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 50,
                  x: inView ? 0 : 50,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0"
              >
                <div className="pb-10">
                  <Image className="w-full" src={contact_bg} title="" alt="" />
                </div>
                <ul>
                  {ContactData.map((e, key) => (
                    <motion.li
                      initial={{ opacity: 0, y: 50, x: 50 }}
                      animate={{
                        opacity: inView ? 1 : 0,
                        y: inView ? 0 : 50,
                        x: inView ? 0 : 50,
                        transition: { duration: 0.6, ease: "easeOut" },
                      }}
                      className="relative flex mb-9"
                      key={key}
                    >
                      <div
                        className={`inline-flex items-center justify-center text-2xl h-14 w-14 cursor-pointer ${e.Bg_color}`}
                      >
                        {e.icon}
                      </div>
                      <div className="flex-1 pl-4">
                        <h5 className="mb-2 text-sm font-normal uppercase tracking-wider text-slate-300">
                          {e.name}
                        </h5>
                        <p className="font-medium md:text-xl text-lg text-white max-w-[250px] cursor-pointer">
                          {e.contact}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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

// import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apolloClient from "@/utils/apolloClient";
import { createQuerySubmissionMutation } from "@/models/Mutations";
import { toast } from "react-toastify";

interface ContactFormSectionProps {}

type queryType = {
  name: string;
  email: string;
  message: string;
};

const ContactFormSection: React.FC<ContactFormSectionProps> = ({}) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  // const [submitted, setSubmitted] = useState<boolean>(false);
  const schema = z.object({
    name: z.string().min(1, "Name should not be empty"),
    email: z.string().min(1, "Email should not be empty").email(),
    message: z.string().min(1, "Message should not be empty"),
  });
  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<queryType>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const submitQuery = (values: queryType) => {
    setSubmitting(true);
    apolloClient
      .mutate({
        mutation: createQuerySubmissionMutation,
        variables: values,
      })
      .then((result) => {
        console.log(result);
        reset(defaultValues);
        toast.success("Query submitted successfully");
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Some error occured. Please try again later :(");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="flex justify-around p-16">
      <div>
        <h2 className="text-xl font-bold text-[#055479]">
          Get In Touch and Explore
        </h2>
        <p className="text-gray-500">Fill out the form</p>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex items-center gap-2">
            <div className="p-3 text-3xl text-[#055479] bg-[#BCEAFF] w-max h-max rounded-full">
              <FaGlobe />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold leading-normal pb-0 mb-0">
                Have Queries?
              </h4>
              <small className="text-gray-700 text-xs">Chat with us</small>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="p-3 text-3xl text-[#055479] bg-[#BCEAFF] w-max h-max rounded-full">
              <FaPhoneAlt />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold leading-normal pb-0 mb-0">
                Mobile Number
              </h4>
              <small className="text-gray-700 text-xs">+41 87541258</small>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="p-3 text-3xl text-[#055479] bg-[#BCEAFF] w-max h-max rounded-full">
              <FaWhatsapp />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold leading-normal pb-0 mb-0">
                Chat on Whatsapp
              </h4>
              <small className="text-gray-700 text-xs">
                Click for WhatsApp Message
              </small>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="p-3 text-3xl text-[#055479] bg-[#BCEAFF] w-max h-max rounded-full">
              <FaEnvelope />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold leading-normal pb-0 mb-0">
                Email Address
              </h4>
              <small className="text-gray-700 text-xs">
                gggggggg@gmail.com
              </small>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="p-3 text-3xl text-[#055479] bg-[#BCEAFF] w-max h-max rounded-full">
              <FaInstagram />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold leading-normal pb-0 mb-0">
                Instagram
              </h4>
              <small className="text-gray-700 text-xs">satyagrah</small>
            </div>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 p-8 shadow-lg bg-[#A5E1F3] rounded-2xl">
        <div className="col-span-2 text-sm">
          <span className="text-red-500">*</span>
          &nbsp;marked fields are required
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label className="text-[#00364D] font-bold">
            Name<sup className="text-red-500">*</sup>
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <input
                placeholder="Name"
                className="p-2 rounded-lg bg-[#D3E8F8]"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors["name"] && (
            <p className="text-sm text-red-400">{errors["name"].message}</p>
          )}
        </div>
        {/* <div className="flex flex-col gap-2">
          <label className="text-[#00364D] font-bold">Mobile Number</label>
          <input placeholder="Number" className="p-2 rounded-lg bg-[#D3E8F8]" />
        </div> */}
        <div className="col-span-2 flex flex-col gap-2">
          <label className="text-[#00364D] font-bold">
            Email Address<sup className="text-red-500">*</sup>
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <input
                placeholder="Email ID"
                type="email"
                className="p-2 rounded-lg bg-[#D3E8F8]"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors["email"] && (
            <p className="text-sm text-red-400">{errors["email"].message}</p>
          )}
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label className="text-[#00364D] font-bold">
            Additional Message<sup className="text-red-500">*</sup>
          </label>
          <Controller
            name="message"
            control={control}
            render={({ field: { value, onChange } }) => (
              <textarea
                placeholder="Please write message here..."
                className="p-2 rounded-lg bg-[#D3E8F8]"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors["message"] && (
            <p className="text-sm text-red-400">{errors["message"].message}</p>
          )}
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <button
            className="w-max text-sm text-white bg-[#055479] disabled:opacity-80 disabled:cursor-not-allowed rounded-lg px-4 py-2 cursor-pointer"
            onClick={handleSubmit(submitQuery)}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;

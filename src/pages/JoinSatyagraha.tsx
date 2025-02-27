import React, { useState } from "react";
import IndianFlagBg from "@/assets/images/indian-flag-bg.png";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apolloClient from "@/lib/services/apolloClient";
import { createQuerySubmissionMutation } from "@/models/Mutations";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

interface JoinSatyagrahaProps {}

type queryType = {
  name: string;
  email: string;
  message?: string;
};

const JoinSatyagraha: React.FC<JoinSatyagrahaProps> = ({}) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const schema = z.object({
    name: z.string().min(1, "Name should not be empty"),
    email: z.string().min(1, "Email should not be empty").email(),
    message: z.string().optional(),
  });
  const defaultValues = {
    name: "",
    email: "",
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
        setSubmitted(true);
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
    <div>
      <div className="relative">
        <span className="absolute inset-0 bg-[#055479]" />
        <img src={IndianFlagBg} className="w-full opacity-90" />
        <h1 className="absolute bottom-8 left-8 text-2xl font-bold text-white">
          Satyagraha 2.0
        </h1>
      </div>

      {submitted ? (
        <div className="flex flex-col gap-4 items-center justify-center sm:p-5 w-full md:w-1/2 p-8 shadow-lg bg-[#A5E1F3] rounded-2xl">
          <div className="w-max rounded-full text-green-400 bg-green-100 flex items-center justify-center mx-auto mb-3.5">
            <FaCheckCircle className="w-12 h-12" />
            <span className="sr-only">Success</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-gray-900">
            Thanks for showing interest in joining the noble cause.
          </p>
          <button
            type="button"
            className="relative bg-none text-black mix-blend-screen rounded-lg px-2 py-1 cursor-pointer before:absolute before:inset-0 before:bg-white before:mix-blend-color-burn before:rounded-lg"
            onClick={() => {
              setSubmitted(false);
            }}
          >
            Continue
          </button>
        </div>
      ) : (
        <div
          id="contact-us"
          className="w-full max-w-md mx-auto my-4 grid grid-cols-2 gap-4 p-8 shadow-lg bg-[#A5E1F3] rounded-2xl"
        >
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
              Tell us more about your inspiration
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
      )}
    </div>
  );
};

export default JoinSatyagraha;

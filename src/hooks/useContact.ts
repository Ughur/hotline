import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "../services/api-client";
import { useState } from "react";
import { ContactFormData, contactFormSchema } from "../utils/validation";

export const useContact = () => {
  const [selectedQueryType, setSelectedQueryType] = useState<string>("");
  const [toast, setToast] = useState({
    visible: false,
    title: "",
    message: "",
    error: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    apiClient
      .post("/contact", data)
      .then(() => {
        reset();
        setToast({
          visible: true,
          title: "Sent Message",
          message: "Message sent successfully",
          error: false,
        });
        setSelectedQueryType("");
      })
      .catch((error) => {
        setToast({
          visible: true,
          title: "Error",
          message: error.message,
          error: true,
        });
      });
  };
  return {
    selectedQueryType,
    setSelectedQueryType,
    toast,
    setToast,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

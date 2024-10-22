import { useContact } from "../hooks/useContact";
import InputField from "./InputField";
import RadioButtonGroup from "./RadioButtonGroup";
import TextAreaField from "./TextAreaField";
import Toast from "./Toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    errors,
    toast,
    setToast,
    selectedQueryType,
    setSelectedQueryType,
    onSubmit,
  } = useContact();

  return (
    <>
      <Toast
        visible={toast.visible}
        title={toast.title}
        message={toast.message}
        setToastVisible={(visible) => setToast({ ...toast, visible })}
        error={toast.error}
      />
      <div className="flex justify-center p-5">
        <div className="bg-neutral-white p-8 rounded-xl">
          <h1 className="text-3xl font-semibold text-neutral-900">
            Contact Us
          </h1>
          <form className="space-y-5 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="max-md:space-y-5 md:flex gap-3">
              <InputField
                errors={errors}
                id="firstName"
                label="First Name"
                register={register}
                type="text"
              />
              <InputField
                errors={errors}
                id="lastName"
                label="Last Name"
                register={register}
                type="text"
              />
            </div>
            <InputField
              errors={errors}
              id="email"
              label="Email"
              register={register}
              type="text"
            />
            <RadioButtonGroup
              id="queryType"
              label="Query Type"
              options={[
                {
                  id: "generalEnquiry",
                  value: "generalEnquiry",
                  label: "General Enquiry",
                },
                {
                  id: "supportRequest",
                  value: "supportRequest",
                  label: "Support Request",
                },
              ]}
              register={register}
              selectedValue={selectedQueryType}
              onOptionSelect={setSelectedQueryType}
              error={errors.queryType?.message}
            />
            <TextAreaField
              errors={errors}
              id="message"
              label="Message"
              register={register}
            />
            <div className="flex items-center">
              <div>
                <input id="consent" type="checkbox" {...register("consent")} />
              </div>
              <label htmlFor="consent" className="ml-2">
                I consent to being contacted by the team{" "}
                <span className="text-primary-600">*</span>
              </label>
            </div>
            {errors.consent && (
              <span className="text-red block">{errors.consent.message}</span>
            )}
            <button className="focus:outline-none bg-primary-600 text-neutral-white py-4 w-full rounded-lg hover:bg-neutral-900 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

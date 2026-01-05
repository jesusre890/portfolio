import { useRef, useState } from "react";
import "./Form.css";
import { BsSendCheck } from "react-icons/bs";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const FormHook = () => {
  const [captchaValido, setCaptchaValido] = useState(null);


  const captcha = useRef(null);

  const onChange=() => {
    console.log('captcha cambiado');
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const form = useRef();
  
  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        "service_k6cflbk",
        "template_51ayhni",
        form.current,
        "yiAjC4F0tt9JZ_lr1"
      );

      notify();
      reset();
    } catch (err) {
      toast.error("Error al enviar el mensaje");
      console.error(err);
    }
  };

  const notify = () => {
    toast.success("Mensaje enviado correctamente!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="form-container">
        <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group md:flex md:items-start">
            <label
              htmlFor="name"
              className="font-medium text-gray-700 text-md dark:text-blue-gray-100 md:ml-2"
            >
              Nombre
            </label>
            <input
              {...register("nombre", {
                required: true,
                maxLength: 20,
              })}
              type="text"
              placeholder="Nombre"
              className="flex flex-row items-center gap-2 text-gray-900 font-small text-sm dark:text-blue-gray-100"
            />
            {errors.nombre?.type === "required" && (
              <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                * Campo requerido
              </p>
            )}
            {errors.nombre?.type === "maxLength" && (
              <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                * Debe tener menos de 20 caracteres
              </p>
            )}
          </div>
          <div className="form-group  md:flex md:items-start">
            <label
              htmlFor="email"
              className="font-medium text-gray-700 text-md dark:text-blue-gray-100 md:ml-2"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              type="text"
              placeholder="Email"
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-blue-gray-100"
            />
            {errors.email?.type === "required" && (
              <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                * Campo requerido
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                * Formato de email invalido
              </p>
            )}
          </div>
          <div className="form-group  md:flex md:items-start">
            <label
              htmlFor="textarea"
              className="font-medium text-gray-700 text-md dark:text-blue-gray-100 ml-2"
            >
              Escribe tu consulta
            </label>
            <textarea
              {...register("textarea", {
                required: true,
                maxLength: 200,
              })}
              type="text"
              rows="10"
              cols="50"
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
            />
            {errors.textarea?.type === "required" && (
              <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                * Falta su consulta
              </p>
            )}
          </div>
          <div className="flex justify-center md:justify-start">
            <ReCAPTCHA
              sitekey="6LdVnh8pAAAAADqWqo99HchqW2yclbJqB2NwmB8a"
              onChange={(val) => setCaptchaValido(val)}
            />
          </div>
          <div>
            <button
              className="form-submit-btn flex items-center mx-auto md:mx-0 dark:bg-slate-500 dark:text-white"
              type="submit"
              disabled={!captchaValido}
            >
              Enviar <BsSendCheck className="my-auto" />
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default FormHook;

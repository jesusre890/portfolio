import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { BsSendCheck } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p8qawbc",
      "template_51ayhni",
      form.current,
      "yiAjC4F0tt9JZ_lr1"
    );
    //.then(
    //  (result) => {
    //    console.log(result.text);
    //  },
    //  (error) => {
    //    console.log(error.text);
    //  }
    //);
    e.target.reset();
  };

  const notify = () => {
    toast.success("Mensaje enviado correctamente!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-group">
            <label
              htmlFor="name"
              className="font-medium text-gray-700 text-md dark:text-slate-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              required
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
            />
          </div>
          <div class="form-group">
            <label
              htmlFor="email"
              className="font-medium text-gray-700 text-md dark:text-slate-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="textarea"
              className="font-medium text-gray-700 text-md dark:text-slate-300"
            >
              Escribe tu consulta
            </label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required=""
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
            >
              {" "}
            </textarea>
          </div>

          <button
            className="form-submit-btn flex items-center mx-auto md:mx-0 dark:bg-slate-500 dark:text-white"
            type="submit"
          >
            Enviar <BsSendCheck className="my-auto" onClick={notify} />
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Form;

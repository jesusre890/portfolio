import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validarFormulario from "./Validacion";
import validacionEnviar from "./ValidacionEnviar";
import "./Form.css";
import { BsSendCheck } from "react-icons/bs";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "@formspree/react";

const Form = () => {
  const [captchaValido, setCaptchaValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      setCaptchaValido(true);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //if (captcha.current.getValue()) {
    //  console.log("El usuario no es un robot");
    //  setUsuarioValido(true);
    //  setCaptchaValido(true);
    //} else {
    //  console.log("Por favor acepta el captcha");
    //  setUsuarioValido(false);
    //  setCaptchaValido(false);
    //}

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

  //const notify = () => {
  //  toast.success("Mensaje enviado correctamente!", {
  //    position: "bottom-center",
  //    autoClose: 5000,
  //    hideProgressBar: false,
  //    closeOnClick: true,
  //    pauseOnHover: true,
  //    draggable: true,
  //    progress: undefined,
  //    theme: "light",
  //  });
  //};

  const [input, setInput] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  const [valido, setValido] = useState({
    name: false,
    email: false,
    textarea: false,
  });

  const [disable, setDisable] = useState(false);

  // Este useEffect controla que el boton "Enviar" se habilite o no
  useEffect(() => {
    let errExists = validacionEnviar(errors, input);
    !errExists ? setDisable(true) : setDisable(false);
  }, [errors, input]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    // Marca el campo como "valido" cuando el usuario interactúa con el mismo
    setValido({
      ...valido,
      [name]: true,
    });
  };

  // Valida los campos solo si el usuario interactua con ellos (valido)
  useEffect(() => {
    if (valido.name) {
      const validationErrors = validarFormulario({ name: input.name });
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: validationErrors.name,
      }));
    }
    if (valido.email) {
      const validationErrors = validarFormulario({ email: input.email });
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validationErrors.email,
      }));
    }
    if (valido.textarea) {
      const validationErrors = validacionEnviar({ textarea: input.textarea });
      setErrors((prevErrors) => ({
        ...prevErrors,
        textarea: validationErrors.textarea,
      }));
    }
  }, [input, valido]);

  const [state, handleSubmit] = useForm("xgejjlae");
  //Funcion que despacha el input mediante Formspree y luego lo setea
  useEffect(() => {
    if (state.succeeded) {
      setInput({
        name: "",
        email: "",
        textarea: "",
      });
      handleSubmit({ succeeded: false });
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit} className="form">
          <div className="form-group md:flex md:items-start">
            <label
              for="input"
              htmlFor="name"
              className="font-medium text-gray-700 text-md dark:text-slate-300 md:ml-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              placeholder="Nombre"
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
              onChange={(e) => handleInputChange(e)}
            />
            <section>
              {errors.name ? (
                <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                  {errors.name}
                </p>
              ) : null}
            </section>
          </div>
          <div class="form-group  md:flex md:items-start">
            <label
              for="input"
              htmlFor="email"
              className="font-medium text-gray-700 text-md dark:text-slate-300 md:ml-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={input.email}
              placeholder="Email"
              className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm dark:text-slate-300"
              onChange={(e) => handleInputChange(e)}
            />
            <section>
              {errors.email ? (
                <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                  {errors.email}
                </p>
              ) : null}
            </section>
          </div>
          <div className="form-group  md:flex md:items-start">
            <label
              for="input"
              htmlFor="textarea"
              className="font-medium text-gray-700 text-md dark:text-slate-300 ml-2"
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
            />
            <section>
              {errors.textarea ? (
                <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                  {errors.textarea}
                </p>
              ) : null}
            </section>
          </div>

          {/*<div>
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LdVnh8pAAAAADqWqo99HchqW2yclbJqB2NwmB8a"
              onChange={onChange}
            />
          </div>
          {captchaValido === false && (
            <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
              * Campo obligatorio
            </p>
          )}*/}
          <div>
              <button
                className="form-submit-btn flex items-center mx-auto md:mx-0 dark:bg-slate-500 dark:text-white"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={true}
              >
                Enviar <BsSendCheck className="my-auto" />
              </button>
          </div>
          {/*<ToastContainer />*/}
        </form>
      </div>
    </>
  );
};

export default Form;

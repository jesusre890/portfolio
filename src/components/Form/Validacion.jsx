const validarFormulario = (input) => {
  let errors = {};

  // Validacion de Name
  let regexNumbers = new RegExp("[0-9]");
  if (!input.name) {
    errors.name = "Se requiere un nombre";
  } else {
    if (input.name.length > 20) {
      errors.name = "Debe ser menor a 10 carácteres";
    }
    if (regexNumbers.test(input.name)) errors.name = "No ingrese números.";
  }

  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!input.email) {
    errors.email = "Debe ingresar un email.";
  } else {
    if (!regexEmail.test(input.email))
      errors.email = "Ingrese un email válido.";
    if (input.email.length > 60) errors.email = "Máximo de 60 caracteres.";
  }

  if (!input.textarea) {
    errors.textarea = "Se requiere un mensaje";
  }

  return errors;
};

export default validarFormulario;

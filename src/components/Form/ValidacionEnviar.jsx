const validacionEnviar = (errors) => {
  let errExists = false;

  errors.name === undefined &&
  errors.email === undefined &&
  errors.textarea === undefined
    ? (errExists = false)
    : (errExists = true);

  return errExists;
};

export default validacionEnviar;

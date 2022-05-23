import Joi from "joi";

const validateAuthSchema = {
  registerSchema: Joi.object().keys({
    email: Joi.string().min(10).required().email(),
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    phoneNumber: Joi.string().min(11).max(15).required(),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .required()
      .messages({
        "string.base": `password must be a string`,
        "string.empty": `password is required`,
        "string.pattern.base": `invalid password format`,
        "any.required": `password is required`,
      }),
    country: Joi.string().min(4).required(),
  }),

  loginSchema: Joi.object().keys({
    email: Joi.string().min(10).required().email(),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .required()
      .messages({
        "string.base": `password must be a string`,
        "string.empty": `password is required`,
        "string.pattern.base": `invalid password format`,
        "any.required": `password is required`,
      }),
  }),
};

export default validateAuthSchema;

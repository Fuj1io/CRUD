import Joi from "joi";

export const userSchema = Joi.object({
    nama    :   Joi.string().min(3).max(45).required(),
    email   :   Joi.string()
                    .email({
                        minDomainSegments : 2,
                        tlds : {allow : ["com", "net", "org"]}
                    })
                    .required().messages({
                        "email.tlds" : "hanya Email dengan domain .com .net dan .org yang diterima"
                    })
});


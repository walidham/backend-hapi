import * as Joi from "joi";
import  * as Hapi  from "@hapi/hapi";


const noteSchema = Joi.object({
    id:Joi.number().min(0),
    title: Joi.string().required().min(4),
    body: Joi.string().min(1).max(10000),
});

export const noteValidator = {validate:{
    payload : noteSchema,
    failAction: (request:Hapi.Request,h:Hapi.ResponseToolkit, error:Joi.ValidationError) => {
        return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
    }
}}
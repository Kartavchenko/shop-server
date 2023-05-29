import Joi from 'joi';

export const addToHistoryOrderSchema = Joi.object({
    userId: Joi.string().required(),
    orders: Joi.array().items({
        items: Joi.array().items({
            name: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            category: Joi.string().required(),
            image_url: Joi.string().optional(),
        }).required(),
    })
});
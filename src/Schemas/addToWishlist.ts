import Joi from 'joi';

export const addToWishlistSchema = Joi.object({
    userId: Joi.string().required(),
    items: Joi.array().items({
        name: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        image_url: Joi.string().optional(),
        favorite: Joi.boolean(),
        _id: Joi.string().required(),
    }).required(),
})
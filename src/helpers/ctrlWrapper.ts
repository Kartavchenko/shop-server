export const ctrlWrapper = (ctrl: Function) =>
	async (req: Request, res: Response, next: Function) => {
    try {
        await ctrl(req, res, next);
    } catch (error) {
        next(error)
    }
}
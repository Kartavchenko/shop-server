const sameSite = (app) => app.use((req, res, next) => {
    res.cookie('myCommonCookie', 'commonValue', {
        sameSite: 'strict',
        httpOnly: true,
        secure: true, // The cookie is only sent over HTTPS connections
    });
    next();
});
export default sameSite;

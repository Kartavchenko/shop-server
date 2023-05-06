class HttpError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

function httpError(status: number, message: string) {
    return new HttpError(status, message);
}

export default httpError;
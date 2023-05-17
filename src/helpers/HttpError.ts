class HttpError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export function httpError(status: number, message: string) {
    return new HttpError(status, message);
}
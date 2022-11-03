class AppError {

    public readonly message: string;
    public readonly statusCode: number;

    constructor(err: any) {
        this.statusCode = 500;

        if (err.message || err.statusCode) {
            this.message = err.message;
            this.statusCode = err.statusCode;
        }
    }
}

export default AppError;
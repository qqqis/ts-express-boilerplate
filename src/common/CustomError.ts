import { Response } from 'express';

type ErrorWithMessage = {
    message: string;
    statusCode?: number;
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
    );
};

const toErrorMessage = (maybeError: unknown): ErrorWithMessage => {
    if (isErrorWithMessage(maybeError)) return maybeError;

    try {
        return new Error(JSON.stringify(maybeError));
    } catch {
        return new Error(String(maybeError));
    }
};

export const getErrorMessage = (error: unknown) => {
    return toErrorMessage(error);
};

export const reportErrorMessage = async (error: unknown, res: Response) => {
    const err = await getErrorMessage(error);

    return res
        .status(err.statusCode || 500)
        .json({ Error: err.message, StatusCode: err.statusCode });
};

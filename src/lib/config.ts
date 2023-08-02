

const BACKEND_URL = "https://cmangaah.com"

export { BACKEND_URL }

export type WithClassName<T = {}> = {
    className?: string;
} & T;
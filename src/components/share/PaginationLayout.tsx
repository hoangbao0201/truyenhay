import { iconEllipsis } from "../../../public/icons"


interface PaginationLayoutProps {
    countPage: number
    currentPage: number
    handleChangePage: any
}

export const PaginationLayout = ({ countPage, currentPage, handleChangePage } : PaginationLayoutProps) => {

    return (
        <ul className="flex justify-center items-center gap-2 text-gray-500 my-5">
            <li onClick={() => handleChangePage(1)}>
                <span className={`text-center font-semibold py-2 px-1 min-w-[42px] block border select-none cursor-pointer dark:hover:bg-white/5 dark:border-white ${ currentPage === 1 ? 'dark:bg-white/25 bg-blue-400 text-white' : '' }`}>1</span>
            </li>

            {
                currentPage > 4 && (
                    <li className="py-2 px-2">
                        <i className="w-4 h-4 block dark:fill-white">{iconEllipsis}</i>
                    </li>
                )
            }

            {
                [
                    currentPage-2,
                    currentPage-1,
                    currentPage,
                    currentPage+1,
                    currentPage+2,
                ].map((number) => {
                    if(number > 1 && number<countPage) {
                        return (
                            <li key={number} onClick={() => handleChangePage(number)}>
                                <span className={`text-center font-semibold py-2 px-1 min-w-[42px] block border select-none cursor-pointer dark:hover:bg-white/5 dark:border-white ${ currentPage === number ? 'dark:bg-white/25 bg-blue-400 text-white' : '' }`}>{number}</span>
                            </li>
                        )
                    }
                })
            }

            {
                countPage - currentPage >= 4 && (
                    <li className="py-2 px-2">
                        <i className="w-4 h-4 block dark:fill-white">{iconEllipsis}</i>
                    </li>
                )
            }

            {
                countPage > 1 && (
                    <li onClick={() => handleChangePage(countPage)}>
                        <span className={`text-center font-semibold py-2 px-1 min-w-[42px] block border select-none cursor-pointer dark:hover:bg-white/5 dark:border-white ${ currentPage === countPage ? 'dark:bg-white/25 bg-blue-400 text-white' : '' }`}>{countPage}</span>
                    </li>
                )
            }

        </ul>
    )
}
import Link from "next/link";
import Image from "next/image"

import moment from "moment";
import "moment/locale/vi";
import LazyLoad from "react-lazy-load";



interface ItemComicProps {
    comic: any
}

const ItemComic = ({ comic }: ItemComicProps) => {

    return (
        <figure className="px-2 mb-3 grid">

            <div className="overflow-hidden rounded-lg shadow-sm border mb-1 h-[220px] leading-[220px] text-center relative">
                <Link href={`/truyen/${comic?.url}`}>
                    <Image
                        width={150}
                        height={200}
                        alt="image"
                        src={`${comic?.avatar}`}
                        // src="/images/logo-nettruyen.png"
                        placeholder="blur"
                        blurDataURL="/images/logo-nettruyen.png"
                        className="align-middle object-cover inset-0 w-full h-full"
                    />
                </Link>
            </div>

            <figcaption>
                <h2 className="mb-2 text-[17px] font-medium leading-tight line-clamp-2">
                    <Link href={`/truyen/${comic?.url}`}>{comic?.name}</Link>
                </h2>
                <ul className="[&>li>a]:block [&>li>a]:text-[14px] [&>li>a]:font-normal [&>li>i]:text-[11px] [&>li>i]:text-gray-500 [&>li]:mb-2 leading-tight">
                    <li className="flex items-center justify-between whitespace-nowrap overflow-hidden">
                        <Link href={`/truyen/${comic?.url}/chapter-${comic?.last_chapter}`}>
                            Chapter {comic?.last_chapter}
                        </Link>
                        <i className="whitespace-nowrap">{moment(new Date(comic?.last_chapter)).fromNow()}</i>
                    </li>
                    <li className="flex items-center justify-between whitespace-nowrap overflow-hidden">
                        <Link href={`/truyen/${comic?.url}/chapter-${Number(comic?.last_chapter) - 1}`}>
                            Chapter test
                        </Link>
                        <i>test</i>
                    </li>
                    <li className="flex items-center justify-between whitespace-nowrap overflow-hidden">
                        <Link href={`/truyen/${comic?.url}/chapter-${Number(comic?.last_chapter) - 2}`}>
                            Chapter test
                        </Link>
                        <i>test</i>
                        {/* <i className="whitespace-nowrap">{moment(new Date(comic?.last_chapter)).fromNow()}</i> */}
                    </li>
                </ul>
            </figcaption>

        </figure>
    )
}

export default ItemComic;
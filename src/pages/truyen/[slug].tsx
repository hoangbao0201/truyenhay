import { ReactNode } from "react";
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next";

import MainLayout from "@/components/layouts/MainLayout";
import Head from "@/components/share/Head";
import { WrapLayout } from "@/components/layouts/CommonLayout";
import { getComicBySlug } from "@/services/comics";
import { iconAuthor, iconList } from "../../../public/icons";
import { DATA_GENRES } from "@/lib/data";
import { getChaptersByNovel } from "@/services/chapters";
import Link from "next/link";
import moment from "moment";
import ListChapters from "@/components/share/ComicDetail/ListChapters";


interface ComicDetailProps {
    comic: any
    chapters: any
}
const ComicDetail = ({ comic, chapters }: ComicDetailProps) => {

    // console.log(chapters);

    return (
        <>
            <Head />
            <WrapLayout className="bg-gray-50 py-5">
                <div className="-mx-4 lg:flex">
                    
                    <div className="lg:w-8/12">
                        <article className="sm:flex px-1">
                            <div className="px-3 flex-shrink-0 mb-4">
                                <Image
                                    width={250}
                                    height={250}
                                    key={`image-${comic?.slug}`}
                                    alt={`truyện ${comic?.title}`}
                                    // blurDataURL={comic?.imageBlurHash}
                                    // placeholder="blur"
                                    src={comic?.thumbnailUrl}
                                    className="w-full h-[250px] mx-auto object-contain"
                                />
                            </div>
                            <div className="px-3 mb-3">
                                <h1 className="px-3 mb-2 text-lg max-sm:text-center uppercase leading-tight font-semibold">
                                    {comic?.title}
                                </h1>
                                <div className="mb-3 flex items-center max-sm:justify-center">
                                    <i className="w-4 h-4 mr-2 block">{iconAuthor}</i>
                                    <p title={`tác giả ${comic?.author}`}>{comic?.author}</p>
                                </div>
                                <ul className="flex items-center max-sm:justify-center flex-wrap gap-2 mb-4 leading-none">
                                    {comic?.author && (
                                        <li className="border-sky-600 text-sky-600 px-3 py-1 border rounded-full ">
                                            <p title={`tác giả ${comic?.author}`}>{comic?.author}</p>
                                        </li>
                                    )}
                                    <li className="border-[#bf2c24] text-[#bf2c24] px-3 py-1 border rounded-full ">
                                        {comic?.newChapterCount > 0 ? "Đang ra" : "Chưa ra chương mới"}
                                    </li>
                                    {comic?.category && (
                                        <li className="border-[#b78a28] text-[#b78a28] px-3 py-1 border rounded-full ">
                                            {DATA_GENRES[comic?.category - 1].label}
                                        </li>
                                    )}
                                    {comic?.personality && (
                                        <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full ">
                                            {DATA_GENRES[comic?.personality - 1].label}
                                        </li>
                                    )}
                                    {comic?.scene && (
                                        <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full ">
                                            {DATA_GENRES[comic?.scene - 1].label}
                                        </li>
                                    )}
                                    {comic?.classify && (
                                        <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full ">
                                            {DATA_GENRES[comic?.classify - 1].label }
                                        </li>
                                    )}
                                    {comic?.viewFrame && (
                                        <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full ">
                                            {DATA_GENRES[comic?.viewFrame - 1].label    }
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </article>
    
                        <div className="px-4">
                            <div className="mb-3">
                                <h3 className="border-b-2 border-sky-600 py-2 mb-2 text-lg text-sky-600 fill-sky-600 font-semibold uppercase">
                                    <i className="w-4 h-4 inline-block mr-2">{iconList}</i>
                                    Nội dung
                                </h3>
                                <p className="text-[14px]">
                                    <Link href={`/`} className="text-sky-600">Truyện tranh</Link>{": "}
                                    <Link href={`/truyen/${comic?.slug}`} className="text-[15px] text-sky-600">{comic?.title}</Link>{" "}
                                    được cập nhật nhanh và đầy đủ nhất tại Truyenhay.
                                    Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ Truyenhay ra các chương mới nhất của truyện Thiên Đạo Đồ Thư Quán.
                                </p>
                            </div>
                            <div className="flex justify-between border-b-2 border-sky-600 py-2 mb-2">
                                <h2 className="text-lg text-sky-600 fill-sky-600 font-semibold uppercase">
                                    <i className="w-4 h-4 inline-block mr-2">{iconList}</i>
                                    Danh sách chương
                                </h2>
                                <button>Đã đọc</button>
                            </div>
                            <div className="flex font-semibold mb-2 mx-1">
                                <div className="w-5/12 px-1">Số chương</div>
                                <div className="w-4/12 px-1 text-center">Cập nhật</div>
                                <div className="w-3/12 px-1 text-center">Xem</div>
                            </div>
                            <ListChapters novelSlug={comic?.slug} chapters={chapters}/>
                        </div>
                    </div>
                    <div className="lg:w-4/12">
                        <div className="px-4">Right</div>
                    </div>

                </div>
            </WrapLayout>
        </>
    )
}

export default ComicDetail;

export const getStaticProps: GetStaticProps = async (context) => {

    const comic = await getComicBySlug();
    const chapters = await getChaptersByNovel();

    return {
        props: {
            comic: comic?.novel || null,
            chapters: chapters?.chapters || null,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

ComicDetail.getLayout = (page: ReactNode) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

// import { useSelector } from "react-redux";
// import { ParsedUrlQuery } from "querystring";

import {
    iconAuthor,
    iconBook,
    iconChevronLeft,
    iconChevronRight,
    iconHeartFull,
    iconHome,
    iconList,
    iconOclock,
    iconT,
    iconTimes,
} from "../../../../public/icons";
import { ParsedUrlQuery } from "querystring";
import { WrapLayout } from "@/components/layouts/CommonLayout";
import Head from "@/components/share/Head";
import Breadcrumb from "@/components/share/Breadcrumb";
import { getChapterDetailHandle } from "@/services/chapters";
import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import LazyLoad from "react-lazy-load";
// import { convertTime } from "@/utils/convertTime";
// import BlurImage from "@/components/Share/BlurImage";
// import { getCountWords } from "@/utils/getCountWords";
// import Breadcrumb from "@/components/Share/Breadcrumb";
// import FormComment from "@/components/Share/FormComment";
// import { REVALIDATE_TIME_DETAILS_PAGE } from "@/constants";
// import { AdsenseForm } from "@/components/Share/AdsenseForm";
// import { getAccessToken } from "@/services/cookies.servies";
// import WrapperLayout from "@/components/Layout/WrapperLayout";
// import { readingNovelHandle } from "@/services/novels.services";
// import { LoadingButton } from "@/components/Layout/LoadingLayout";
// import OptionsListChapter from "@/components/Share/ContentChapter/OptionsListChapter";
// import { checkFollowNovelHandle, followNovelHandle, unfollowNovelHandle } from "@/services/follow.services";
// import { useMediaQuery } from "usehooks-ts";

interface Params extends ParsedUrlQuery {
    slug: string;
}

export interface ChapterDetailPageProps {
    chapter?: string[];
}

const ChapterDetailPage = ({ chapter }: ChapterDetailPageProps) => {

    // const paginationRef = useRef<HTMLDivElement>(null)
    // const paginationFakeRef = useRef<HTMLDivElement>(null)
    
    // const [isFixed, setIsFixed] = useState(false);
    // const [isFollow, setIsFollow] = useState<null | boolean>(null)
    // const { isAuthenticated, currentUser, userLoading } = useSelector((state: any) => state.user);


    // Handle Follow Novel
    const handleFollowNovel = async () => {
        // const token = getAccessToken()
        // if(!token || !chapter?.novelId) {
        //     console.log("Không có token")
        //     return
        // }
        // if(!isAuthenticated) {
        //     console.log("Chưa đăng nhập")
        //     return;
        // }
        // try {
        //     const dataFollowNovel = {
        //         userId: currentUser.userId,
        //         novelId: chapter.novelId,
        //         token: token
        //     }
        //     const followNovelRes = await followNovelHandle(dataFollowNovel as Pick<NovelFollowerType , 'novelId'> & { token: string });
        //     if(followNovelRes?.success) {
        //         setIsFollow(true)
        //         return
        //     }
            
        // } catch (error) {
        //     console.log(error)
        // }
    }

    // Handle Unfollow Novel
    const handleUnfollowNovel = async () => {
        // const token = getAccessToken()
        // if(!token || !chapter?.novelId) {
        //     console.log("Không có token")
        //     return
        // }
        // if(!isAuthenticated) {
        //     console.log("Chưa đăng nhập")
        //     return;
        // }
        // try {
        //     const dataFollowNovel = {
        //         userId: currentUser.userId,
        //         novelId: chapter.novelId,
        //         token: token
        //     }
        //     const followNovelRes = await unfollowNovelHandle(dataFollowNovel as Pick<NovelFollowerType , 'novelId'> & { token: string });
        //     if(followNovelRes?.success) {
        //         setIsFollow(false)
        //         return
        //     }

        // } catch (error) {
        //     console.log(error)
        // }
    }

    // Increase view chapter
    useEffect(() => {
        // if (chapter) {
        //     const timeoutId = setTimeout(() => {
        //         increaseViewChapterHandle(`${chapter.chapterId}?userId=${isAuthenticated ? currentUser.userId : ''}`);
        //     }, 5000);

        //     return () => {
        //         clearTimeout(timeoutId);
        //     };
        // }
    }, [chapter]);

    // Mark read
    useEffect(() => {
        // if (chapter) {
        //     const token = getAccessToken();
        //     if (isAuthenticated && token) {
        //         const timer = setTimeout(() => {
        //             const dataReadingNovel = {
        //                 novelId: String(chapter?.novelId),
        //                 chapterRead: String(chapter?.chapterNumber),
        //                 token: token,
        //             };
        //             // console.log("readingNovelHandle");
        //             readingNovelHandle(
        //                 dataReadingNovel as Pick<
        //                     HistoryReadingType,
        //                     "novelId" | "chapterRead"
        //                 > & { token: string }
        //             );
        //         }, 1000);

        //         return () => {
        //             clearTimeout(timer);
        //         };
        //     }
        // }
    }, [chapter]);

    // Scroll Show/Hidden row options chapter
    useEffect(() => {
        // const handleScroll = () => {
        //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
        //     if(paginationRef.current && paginationFakeRef.current) {
        //         const targetNavPosition = paginationRef?.current?.offsetTop;
        //         const targetNavFakePosition = paginationFakeRef?.current?.offsetTop;

        //         if(targetNavFakePosition === 0 && scrollPosition>targetNavPosition) {
        //             setIsFixed(true);
        //         }
        //         else if(targetNavFakePosition !== 0 && scrollPosition<targetNavFakePosition) {
        //             setIsFixed(false)
        //         }

        //     }
        // };

        // window.addEventListener("scroll", handleScroll);

        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, []);

    // Handle check follow novel
    const handleCheckFollowNovel = async () => {
        // const token = getAccessToken();
        // if(!token || !chapter?.novelId) {
        //     console.log("Chưa đủ thông tin")
        //     return
        // }
        // try {
        //     const query = `${chapter?.novelId}?token=${token}`
        //     const checkFollowRes = await checkFollowNovelHandle(query);

        //     if(checkFollowRes.success) {
        //         setIsFollow(checkFollowRes.isFollow)

        //         return
        //     }

        //     setIsFollow(false)
        // } catch (error) {
        //     setIsFollow(false)
        // }
    }

    // Call funciton "handleCheckFollowNovel" for the first time
    useEffect(() => {
        // if(!userLoading) {
        //     if(isAuthenticated) {
        //         handleCheckFollowNovel()
        //     }
        //     else {
        //         setIsFollow(false);
        //     }
        // }
    }, [chapter]);

    return (
        <> 
            <Head />
            <WrapLayout className="px-1">
                {
                    chapter && (
                        <>  
                            <div>
                                
                            </div>
                            <div className="max-w-lg w-full mx-auto">
            
                                {
                                    chapter.map((chapImage, index) => {
                                        return (
                                            <LazyLoad key={index}>
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    alt="Image chapter"
                                                    src={`${chapImage}`}
                                                    className="w-full object-cover inset-0"
                                                />
                                            </LazyLoad>
                                        )
                                    })
                                }
            
                            </div>
                        </>
                    )
                }
            </WrapLayout>
        </>
                
    );
};

export const getStaticProps: GetStaticProps<ChapterDetailPageProps> = async (
    context: GetStaticPropsContext
) => {
    try {
        const chapterResponse = await getChapterDetailHandle();

        return {
            props: {
                chapter: chapterResponse,
            },
        };

    } catch (error) {
        return { notFound: true };
    }
};
export const getStaticPaths: GetStaticPaths<Params> = () => {
    return {
        paths: [],
        fallback: true,
    };
};


ChapterDetailPage.getLayout = (page: ReactNode) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    );
};

export default ChapterDetailPage;

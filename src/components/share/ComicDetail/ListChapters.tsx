import { useState } from "react";
import Link from "next/link";

import moment from "moment";
import { iconPlus } from "../../../../public/icons";
import { styled } from "styled-components";


const ButtonToggle = styled.button<{isShow: boolean}>`
    display: block!important;
    text-align: center;
    border: 1px solid #ddd;
    line-height: 35px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: ${props => !props.isShow ? '35px' : '0px'};
        top: -36px;
        background: linear-gradient(rgba(255,255,255,0),white);
        width: 100%;
    }
`

interface ListChaptersProps {
    novelSlug: string
    chapters: any
}

const ListChapters = ({ novelSlug, chapters } : ListChaptersProps) => {

    const [isShow, setIsShow] = useState(chapters?.length > 20 ? false : true)

    return (
        <nav className="border rounded-md px-1 relative grid">
            <ul className={`[&>li]:border-b [&>li]:border-dashed [&>li]:mx-1 overflow-hidden ${!isShow ? "max-h-[590px]" : ''}`}>
                {
                    chapters && chapters.length>0 && chapters.map((chapter: any, index: any) => {
                        return (
                            <li key={chapter.chapterId} className={`flex items-center py-1 ${!isShow && index > 19 ? "hidden" : ''}`}>
                                <div className="w-5/12 px-1 hover:text-sky-600">
                                    <Link href={`/truyen/${novelSlug}/chuong-${chapter.chapterNumber}`}>
                                        Chapter {chapter?.chapterNumber}
                                    </Link>
                                </div>
                                <div className="w-4/12 px-1 text-center text-gray-500 text-sm">
                                    {moment(new Date(chapter?.createdAt)).fromNow()}
                                </div>
                                <div className="w-3/12 px-1 text-center text-gray-500 text-sm">52.321</div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                chapters?.length > 19 && (
                    <ButtonToggle isShow={isShow} onClick={() => setIsShow(value => !value)} className={`my-1 block hover:bg-gray-100 rounded-b-md`}>
                        {/* <i className="w-3 h-3 mr-2 block">{iconPlus}</i> */}
                        {isShow ? "Ẩn đi" : "Xem thêm"}
                    </ButtonToggle>
                )
            }
        </nav>
    )
}

export default ListChapters;
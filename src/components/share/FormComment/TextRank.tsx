import cn from "clsx"
import styled from "styled-components";
import { WithClassName } from "@/lib/config";
import { LEVEL_VALUE } from "@/lib/data";
import { CalLevel } from "@/utils/CalLevel";

interface TextStyleProps {
    rank: number;
}
const TextStyle = styled.span<TextStyleProps>`
    -webkit-background-clip: text;
`

interface TextRankProps extends WithClassName {
    alt?: string
    text?: string
    rank: number
}

const TextRank = (props : TextRankProps) => {

    const { position: { id, color, value }, scale } = CalLevel(props.rank)

    return (
        <TextStyle
            style={
                props.text ? { 
                    backgroundImage: id > 0 && id < 8 ? ( `url("/emotions/rank/${id}.gif")` ) : '', 
                } : { 
                    color: color, borderColor: color
                }
            }
            rank={props.rank || 1}
            className={cn(
                props.className,
                `
                    whitespace-nowrap overflow-hidden relative

                    ${
                        props.text
                            ? ("font-bold")
                            : (`text-xs border px-2 rounded-sm`)
                    }

                    ${
                        id == 0 ? "text-gray-800" : "text-black/10"
                    }
                `,
            )}
        >
            {props.text || value }
            {!props.text && <span style={{ width: `${scale}%`, backgroundColor: `${color}`, opacity: `0.4` }} className={`absolute block top-0 right-0 bottom-0 left-0 bg-[${color}]/40`}></span>}
        </TextStyle>
    )
}

export default TextRank;
import { useState } from "react";


interface ReadMoreReadLessProps {
    children: any
    maxCharacterCount: number
}

const ReadMoreReadLess = ({ children, maxCharacterCount = 100 }: ReadMoreReadLessProps) => {

    const [isRead, setIsRead] = useState(true);

    // const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    return (
        <div>
            children
        </div>
    )
}
export default ReadMoreReadLess;
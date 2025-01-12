import { useState } from "react";


const EllipsisText = ({ text, maxLength }) => {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className="flex flex-row items-center">
            <p className={isExpand? '' : 'text-ellipsis'}>
                {isExpand ? text : `${text.slice(0, maxLength)}...`}
            </p>
            <button onClick={() => setIsExpand(!isExpand)} className="text-blue-500 hover:underline mt-2">{isExpand ? 'less' : 'more'}</button>
        </div>
    );
};

export default EllipsisText;
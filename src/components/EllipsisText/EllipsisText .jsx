import { useState } from "react";


const EllipsisText = ({ text, maxLength }) => {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div>
            <p className={isExpand? '' : 'text-ellipsis'}>
                {isExpand ? text : `${text.slice(0, maxLength)}...`}
            </p>
            <button onClick={() => setIsExpand(!isExpand)} className="text-blue-500 hover:underline mt-2">{isExpand ? 'show less' : 'read more'}</button>
        </div>
    );
};

export default EllipsisText;
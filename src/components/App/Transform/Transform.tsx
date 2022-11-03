import React, {useRef} from 'react';

const Transform = () => {
    const refA = useRef<HTMLDivElement>(null);
    const refB = useRef<HTMLDivElement>(null);


    function handleClick() {
        console.log("will handle transform here");
        if(refA.current) {
            refA.current.className = 'divB';
        }
        if(refB.current) {
            refB.current.className = 'divA';
        }
    }

    return (
            <div>
                <div className="divA" ref={refA}>
                    Div A
                </div>
                <div className="divB" ref={refB}>
                    Div B
                </div>
                <button className="btn" onClick={handleClick}>Transform</button>
            </div>
            )
}

export default Transform;
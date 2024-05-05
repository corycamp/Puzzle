import React from 'react'

interface MainGridProps {
    currentImage: string;
}

const MainGrid =(props:MainGridProps)=>{
    const {currentImage} = props
    return (
        <>
            <div>
            {!!currentImage && <img src={`${currentImage}&w=380&dpr=2`} alt="test"/>}
            </div>
        </>
    )
}

export default MainGrid;
import React, { useEffect, useState } from 'react'
import PuzzlePiece from './PuzzlePiece';

interface PuzzleGridProps {
    currentImage: string;
}


const PuzzleGrid =(props:PuzzleGridProps)=>{
    const {
        currentImage
    } = props;

    const [images, setImage] = useState<typeof Image[]>();
    let img = new Image();
    useEffect(()=>{
        img.src = `${currentImage}&w=380&dpr=2`
    },[currentImage])

    console.log(img)
    const t = []
    for(let i = 0; i < 20; i++){
        t.push(<PuzzlePiece image={`${currentImage}&w=38&dpr=2`}/>)
    }
    return(
        <div>{t}</div>
    )
    

}

export default PuzzleGrid;
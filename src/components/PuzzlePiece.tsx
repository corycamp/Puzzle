import React from 'react'
import Draggable from 'react-draggable';

interface PuzzlePieceProps{
    image: string;
}

const PuzzlePiece =(props:PuzzlePieceProps)=>{
    const {
        image
    }=props;
    return (
    <>
    <div>
        <Draggable>
            <img src={image} draggable="false"/>
        </Draggable>
        </div>
    </>)

}

export default PuzzlePiece;
import { useState, useEffect, useCallback } from 'react';



export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);




    const calcScore = useCallback(() => {
        const linePoints = [40, 100, 300, 1200];
        // check for score
        if (rowsCleared > 0) {
            setScore(prev => prev + linePoints[(rowsCleared - 1) - 1] * (level + 1));
            setRows(prev => prev + (rowsCleared - 1));
        };
    }, [level, rowsCleared, rows]);


    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);



    return [score, setScore, rows, setRows, level, setLevel];

}
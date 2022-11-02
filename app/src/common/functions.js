
export const styles = {
    toggleElement: (x1, x2)  => ((x2 === undefined) ?
    { display: x1 ? 'flex' : 'none'} : 
    { display: x1 && x2 ? 'flex' : 'none' })
};

export const randInt = (min, max) => min + Math.random() * (max - min);

export const randCoordinates = (rangeSize) => {
    return [ randInt(-rangeSize, rangeSize), randInt(-rangeSize, rangeSize) ];
};
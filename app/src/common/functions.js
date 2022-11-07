export const randInt = (min, max) => min + Math.random() * (max - min);

export const randCoordinates = (rangeSize) => {
    return [ randInt(-rangeSize, rangeSize), randInt(-rangeSize, rangeSize) ];
};
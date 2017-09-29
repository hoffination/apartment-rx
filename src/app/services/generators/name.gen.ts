export const partOne: string[] = [
    'Upper', 'York', 'Junk', 'Union', 'Harbor', 'Clear', 'Leafy', 'Sunny',
    'South', 'North', 'East', 'West', 'Dank', 'Mega', 'Ben\'s', 'Rangle',
    'Coders', 'Money', 'Cash', 'Blue', 'Orange', 'Purple'
];
export const partTwo: string[] = [
    'Heights', 'Place', 'Yard', 'Stone', 'Water', 'Grotto', 'Apartments',
    'Gardens', 'Court', 'Oaks', 'Homes', 'Ridge', 'Lake', 'Crossing', 'Hills'
];

export function generate(): string {
    return partOne[getRandomArbitraryInteger(0, partOne.length - 1)] + ' '
        + partTwo[getRandomArbitraryInteger(0, partTwo.length - 1)] + ' #'
        + getRandomArbitraryInteger(0, 1000);
}

export function getRandomArbitraryInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}

export function getRandomArbitraryCost(min: number, max: number): number {
    return +(Math.random() * (max - min)).toFixed(2);
}

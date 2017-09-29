import { generate, partOne, partTwo } from './name.gen';

describe('Apartment Name Generator', () => {
    it('should generate a string when called', () => {
        const result = generate();
        expect(typeof result).toBe('string');
    });

    it('should have two parts', () => {
        const result = generate();
        expect(result.split(' ').length).toEqual(3);
    });

    it('should be constructed from partOne and partTwo', () => {
        const result = generate().split(' ');
        expect(partOne).toContain(result[0]);
        expect(partTwo).toContain(result[1]);
    });
});

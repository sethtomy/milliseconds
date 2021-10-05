import * as ms from './index';

const validTestInputs = [
    Number.MAX_SAFE_INTEGER,
    1,
    0,
    -1,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_VALUE,
];

describe('composite tests', () => {

    const TWO_NINES = 0.99;

    const FIVE_NINES = 0.99999;

    test('seconds to minutes', () => {
        expect(ms.fromSeconds(60)).toBe(ms.fromMinutes(1));
    });

    test('minutes to hours', () => {
        expect(ms.fromMinutes(60)).toBe(ms.fromHours(1));
    });

    test('hours to days', () => {
        expect(ms.fromHours(24)).toBe(ms.fromDays(1));
    });

    test('days to weeks', () => {
        expect(ms.fromDays(7)).toBe(ms.fromWeeks(1));
    });

    test('days to months to 2-9 accuracy', () => {
        const AVERAGE_DAYS_IN_MONTH = 30.4;
        const fromDays = ms.fromDays(AVERAGE_DAYS_IN_MONTH);
        const fromMonths = ms.fromMonths(1)
        const max = Math.max(fromDays, fromMonths);
        const min = Math.min(fromDays, fromMonths);
        expect(min / max).toBeGreaterThan(TWO_NINES);
    });

    test('months to years to 5-9 accuracy', () => {
        const fromMonths = ms.fromMonths(12);
        const fromYears = ms.fromYears(1)
        const max = Math.max(fromYears, fromMonths);
        const min = Math.min(fromYears, fromMonths);
        expect(min / max).toBeGreaterThan(FIVE_NINES);
    });

});

test('error handler', () => {
    expect(() => ms.fromSeconds(Number.MAX_VALUE)).toThrow();
});

describe('various input', () => {

    test.each(validTestInputs)('.fromSeconds(%i)', (input) => {
        expect(() => ms.fromSeconds(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromMinutes(%i)', (input) => {
        expect(() => ms.fromMinutes(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromHours(%i)', (input) => {
        expect(() => ms.fromHours(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromDays(%i)', (input) => {
        expect(() => ms.fromDays(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromWeeks(%i)', (input) => {
        expect(() => ms.fromWeeks(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromMonths(%i)', (input) => {
        expect(() => ms.fromMonths(input)).not.toThrow();
    });

    test.each(validTestInputs)('.fromYears(%i)', (input) => {
        expect(() => ms.fromYears(input)).not.toThrow();
    });

});

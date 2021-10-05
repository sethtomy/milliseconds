function sanitizeOutput(input: number, output: number, fnName: string): number {
    if (!isFinite(output)) {
        throw new Error(`${fnName}(${input}) would result in a non finite result!`)
    }
    return output;
}

export function fromSeconds(seconds: number): number {
    const output = seconds * 1000;
    return sanitizeOutput(seconds, output, fromSeconds.name);
}

export function fromMinutes(minutes: number): number {
    const output = fromSeconds(minutes * 60);
    return sanitizeOutput(minutes, output, fromMinutes.name);
}

export function fromHours(hours: number): number {
    const output = fromMinutes(hours * 60);
    return sanitizeOutput(hours, output, fromHours.name);
}

export function fromDays(days: number): number {
    const output = fromHours(days * 24);
    return sanitizeOutput(days, output, fromDays.name);
}

export function fromWeeks(weeks: number): number {
    const output = fromDays(weeks * 7);
    return sanitizeOutput(weeks, output, fromWeeks.name);
}

/**
 * This function assumes average seconds in a month as sited in below link.
 * @link https://www.quora.com/What-is-the-average-number-of-days-in-a-month/answer/Niko-Salminen?ch=10&oid=70564313&share=dde06bc8&target_type=answer
 */
export function fromMonths(months: number): number {
    const AVERAGE_MONTH_IN_SECONDS = 2629746;
    const output = fromSeconds(months * AVERAGE_MONTH_IN_SECONDS);
    return sanitizeOutput(months, output, fromMonths.name);
}

/**
 * This function assumes an average "solar year" as sited in below link.
 * @link https://www.quora.com/How-many-seconds-are-in-a-year/answer/Behnam-Esfahbod?ch=10&oid=129552736&share=84c1f12a&target_type=answer
 */
export function fromYears(years: number): number {
    const AVERAGE_YEAR_IN_DAYS = 365.24219;
    const output = fromDays(years * AVERAGE_YEAR_IN_DAYS);
    return sanitizeOutput(years, output, fromYears.name);
}

# milliseconds

A package for obvious time-interval to millisecond conversions.

# Installation

Install with NPM:

```shell
npm install @sethtomy/milliseconds
```

How to use:

```typescript
import * as ms from '@sethtomy/millseconds'

const fromSeconds: number = ms.fromSeconds(30);
const fromMinutes: number = ms.fromMinutes(2);
const fromHours: number = ms.fromHours(1/60);
const fromDays: number = ms.fromDays(1.33);
// Average Month
const fromMonths: number = ms.fromMonths(12);
// Average Year
const fromYears: number = ms.fromYears(1);
```

# Tests

To run:

```shell
npm test
```


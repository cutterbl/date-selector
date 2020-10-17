# DateSelector
##### Check out the [documentation](https://cutterscrossing.com/date-selector/) for more information.

The `DateSelector` is a simple React control for picking a date from a small calendar control. This can be embedded in your page, placed in a modal or popper control, whatever you like.

## Installation and Usage

Simply install the package in your project:

```
npm i @cxing/date-selector
```

Then use it in your React template:

```
import DateSelector from '@cxing/date-selector';
```

All date values are expected to be [Luxon](https://moment.github.io/luxon/) `DateTime` objects. Luxon is the modern replacement for [Moment.js](https://momentjs.com/), developed by the same team.

## I18n, Timezones, and Browser Support

Because we're using [Luxon](https://moment.github.io/luxon/), under the hood, you get full i18n and timezone support when you use the `defaultDate` prop (unless, of course, you're using IE). Make sure to read the rest of the documentation, where we give an example of this.

# Styling the calendar's view buttons

#### Process doc to understand what is currently happening, and how to move forward

There are two parts to styling the 'buttons' in the calendar view: the button, and the container around the button.

### Button Container

```css
// from shared
.wrapper {
  display: inline;
  position: relative;
}

.thisDay {
  &::after {
    content: '';
    position: absolute;
    z-index: auto;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid blue;
    right: 0.25rem;
    clear: both;
  }
}

.activeDate {
  &.thisDay {
    &::after {
      border-bottom-color: white;
    }
  }
}

// from DayButton
.thisDay {
  &::after {
    bottom: -0.2rem;
  }
}

// from MonthButton
.thisDay {
  &::after {
    bottom: -0.9rem;
  }
}

// from YearButton
.thisDay {
  &::after {
    bottom: -0.9rem;
  }
}
```

So, putting all of this together, the container styling is as follows

- we have an `inline` component, relatively positioned
- if the day is `today`, it would get `.thisDay`
- it has an `::after` that is conditionally changed
  - `.thisDay` is the base, with additional styling applied as a `DayButton` 
  - if `today` is also the `activeDate`, we change the `bottom-border-color`

All of this conditional styling applies solely to the 'today' marker.
We can address this by building a method to create our Emotion style definition.

```js
const todayMarker = {
  content: '""',
  position: 'absolute',
  zIndex: 'auto',
  width: 0,
  height: 0,
  borderLeft: '0.5rem solid transparent',
  borderTop: '0.5rem solid transparent',
  borderBottom: '0.5rem solid blue',
  right: '0.25rem',
  clear: 'both',
};

const activeDateMarker = {
  borderBottomColor: 'white',
};

export function buildTodayMarker({today, activeDate, date, view}) {
  return {
    '&::after': {
      ...(+date === +today && {
        ...todayMarker, // convert to *only* the ::after styles. default 'bottom' to Month/Year value
        ...(+date === +activeDate && activeDateMarker),
        bottom: view === 'day' ? '-0.2rem' : '-0.9rem',
      }), // convert currentDate to *only* ::after styles
    }
  }
}
```

### The button itself

```css
// css from shared
.button {
  border-color: transparent;
  border-radius: 3px;
  background-color: transparent;
  position: relative;
}

.activeDate {
  button {
    background-color: lighten(blue, 20%);
    color: white;
  }
}

.valueDate {
  button {
    background-color: blue;
  }
}

// from DayButton
.dayButton {
  @extend .button;
  width: 2rem;
  height: 2rem;
}

// from MonthButton
.monthButton {
  @extend .button;
  width: 25%;
  height: 3.3333rem;
}

// from YearButton
.yearButton {
  @extend .button;
  width: 20%;
  height: 3.5rem;
}
```

Breaking this down, the `button` in the `view` changes, based on state:

- every button extends the base `.button`
- `view` buttons have differing `width`s and `height`s
- if the button is on the `activeDate`, it's `background-color` and `color` change
- if the button is also the `value` date, it's `background-color` is the end result

Think this can be handled by multiple definitions.

```js
const baseButton = {
  borderColor: 'transparent',
  borderRadius: 3,
  backgroundColor: 'transparent',
  position: 'relative',
};

const activeButton = {
  backgroundColor: 'lighten(blue, 20%)',
  color: 'white',
};

const valueButton = {
  backgroundColor: 'blue',
};

const viewButtons = {
  day: {
    width: '2rem',
    height: '2rem'
  },
  month: {
    width: '25%',
    height: '3.33333rem'
  },
  height: {
    width: '20%',
    height: '3.33333rem'
  }
}

css={[
  baseButton,
  viewButtons[view],
  +date === +activeDate && activeButton,
  +date?.ordinal === +value?.ordinal & valueButton
]}
```
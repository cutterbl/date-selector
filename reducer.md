# Move to Reducer

Things to know: `today` is the highlighted 'base' date (`defaultDate` or `today`). The `activeDate` is the highlighted date as the user
navigates through the component. Setting the `value` will initially set the `activeDate`, but only by selecting the `activeDate` will one change the `value`.

State:
- today `<DateTime>` (defaultDate || new Date)
- activeDate `<DateTime>` (value || today)
- showCal (?) `<Boolean>` (defaults to false)
- defaultView `<String>` (defaults to 'day'?)
- range `<Array [DateTime]>` (based on activeDate & view)

Context:
- reducer (State `<Object>`)
- onChange `<Function>`
- messages `<Array [String]>`
- components `<Object [node]>`
- isDateDisabled `<Function>`(may belong in State)
- onError `<Function>` (is 'value' outside of min/max range? may belong in State?)


Reducer Actions:
- setActiveDate -> Update Range -> showCal(true) (?)
- onDayClick -> if date in min/max range and not already selected, fire onChange
- onMonthClick -> (? reevaluate) changes range and activeDate
- onYearClick -> (? reevaluate) changes range and activeDate
- setView -> Update Range -> showCal(true) (?)
- Next -> setActiveDate to DateTime.plus(view conversion)
- Previous -> setActiveDate to DateTime.minus(view conversion)
- labelClick (? reevaluate) switches view

Effects:
- onValueChange -> reinitialize State (resets activeDate and range)
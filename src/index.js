/**
 * @cc/utilities are various utility bits used by different projects
 */
import DateSelector from './DateSelector.component';

import { name as moduleName, version as packageVersion } from '../package.json';

export default DateSelector;
DateSelector.version = packageVersion;

export { moduleName, packageVersion };

export { getRange, mergeDates, isInRange } from './picker/utils/luxonUtils';

export { dateProps, datePickerProps } from './picker/utils/propTypes';

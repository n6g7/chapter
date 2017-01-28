import _mapValues from 'lodash/mapValues';
import _pickBy from 'lodash/pickBy';

export function removeUndefinedValues(obj) {
  return _pickBy(
    _mapValues(
      obj,
      value => typeof value === 'object' ? removeUndefinedValues(value) : value
    ),
    value => value !== undefined
  );
}

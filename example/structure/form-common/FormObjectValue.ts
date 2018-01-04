import * as _ from 'lodash';
import * as Stream from 'mithril/stream';

import FormObjectArrayValue from './FormObjectArrayValue';
import FormValue from './FormValue';

export type FormedT<T> = {[key in keyof T]: FormValue<any>; };

interface FormObjectValue<T extends object, U extends FormedT<T>> extends FormValue<T, U> {
}

function getFormValue(data: any): FormValue<any> {
  if (_.isArray(data)) {
    return FormObjectArrayValue(_.clone(data));
  } else if (_.isObject(data)) {
    return FormObjectValue(_.clone(data));
  } else {
    return FormValue(data);
  }
}

function FormObjectValue<T extends object, U extends FormedT<T>>(initial: T): FormObjectValue<T, U> {
  const form_values: Array<FormValue<any>> = [];
  const formed_initial = {} as U;
  for (const key of Object.keys(initial) as Array<keyof T>) {
    const value = getFormValue(initial[key]);
    form_values.push(value);
    formed_initial[key] = value;
  }
  const stream: FormObjectValue<T, U> = Stream<U>(formed_initial) as FormObjectValue<T, U>;

  // func
  stream.reset = () => Object.keys(stream()).forEach((key) => stream()[key].reset());

  stream.save = () => {
    initial = stream.toValue();
    Object.keys(stream()).forEach((key) => stream()[key].save());
  };

  stream.toValue = () => {
    const value = {};
    Object.keys(stream()).forEach((key) => value[key] = stream()[key].toValue());
    return value as T;
  };

  // map
  Stream.merge(form_values).map(() => stream(stream()));

  // check modified
  stream.is_modified = stream.map(() => !_.isEqual(initial, stream.toValue()));

  // check validation
  stream.error_message = Stream.merge(_.map(form_values, 'error_message')).map((error_message_list) => {
    const error_index = _.findIndex(error_message_list, (error_message) => error_message.length > 0);
    return error_index >= 0 ? error_message_list[error_index] : '';
  });
  stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
    .map(([error_message, is_modified]) => error_message ? 'has-error' : (is_modified ? 'has-success' : ''));

  return stream;
}

export default FormObjectValue;

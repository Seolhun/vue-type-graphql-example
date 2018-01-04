import * as _ from 'lodash';
import * as Stream from 'mithril/stream';

import FormObjectValue, { FormedT } from './FormObjectValue';
import FormValue from './FormValue';

interface FormObjectArrayValue<T extends object, U extends FormedT<T>> extends FormValue<T[], Array<FormObjectValue<T, U>>> {
  push: (value: T) => void;
  splice: (start: number, delete_count: number, ...items: T[]) => void;
}

function updateErrorMessage<T extends object, U extends FormedT<T>>(value: FormObjectArrayValue<T, U>) {
  const error_message_list: string[] = value().map((attribute) => attribute.error_message());
  const error_index = _.findIndex(error_message_list, (error_message) => error_message.length > 0);
  value.error_message(error_index >= 0 ? error_message_list[error_index] : '');
}

function onValueChanged<T extends object, U extends FormedT<T>>(stream: FormObjectArrayValue<T, U>, initial: T[]) {
  stream.is_modified(!_.isEqual(initial, stream.toValue()));
  stream(stream());
}

function FormObjectArrayValue<T extends object, U extends FormedT<T>>(initial: T[]): FormObjectArrayValue<T, U> {
  const formed_initial = initial.map((data) => FormObjectValue<T, U>(data));
  const stream: FormObjectArrayValue<T, U> = Stream<Array<FormObjectValue<T, U>>>(formed_initial) as FormObjectArrayValue<T, U>;

  stream.toValue = () => stream().map((v) => v.toValue());

  // check modified
  stream.is_modified = Stream(false);

  // check validation
  stream.error_message = Stream('');
  stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
    .map(([error_message, is_modified]) => error_message ? 'has-error' : (is_modified ? 'has-success' : ''));

  // data changed
  stream().forEach((value) => {
    value.map(() => onValueChanged(stream, initial));
    value.error_message.map(() => updateErrorMessage(stream));
  });

  // push
  stream.push = (value) => {
    const form_value = FormObjectValue<T, U>(value);
    stream().push(form_value);
    form_value.map(() => onValueChanged(stream, initial));
    form_value.error_message.map(() => updateErrorMessage(stream));
  };

  // splice
  stream.splice = (...args) => {
    stream().splice.apply(stream(), args);
    stream(stream());
  };

  // func
  stream.reset = () => stream().forEach((v) => v.reset());
  stream.save = () => {
    initial = stream.toValue();
    stream().forEach((v) => v.save());
  };

  return stream;
}

export default FormObjectArrayValue;

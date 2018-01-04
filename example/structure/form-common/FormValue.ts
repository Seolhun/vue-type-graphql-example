import * as _ from 'lodash';
import * as Stream from 'mithril/stream';

interface FormValue<T, U = T> extends Stream.Stream<U> {
  is_modified: Stream.Stream<boolean>;
  error_message: Stream.Stream<string>;
  validation_state: Stream.Stream<string>;
  reset: () => void;
  save: () => void;
  toValue: () => T;
}

function getCloneData<T>(value: T): T {
  if (value instanceof File) {
    return value;
  }

  return _.cloneDeep(value);
}

function FormValue<T>(initial: T): FormValue<T> {
  const stream: FormValue<T> = Stream<T>(getCloneData(initial)) as FormValue<T>;

  // check modified
  stream.is_modified = stream.map((value) => !_.isEqual(initial, value));

  // check validation
  stream.error_message = Stream('');
  stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
    .map(([error_message, is_modified]) => error_message ? 'has-error' : (is_modified ? 'has-success' : ''));

  stream.reset = () => stream(getCloneData(initial));
  stream.save = () => {
    initial = stream();
    stream(initial);
  };

  stream.toValue = () => stream();

  return stream;
}

export default FormValue;

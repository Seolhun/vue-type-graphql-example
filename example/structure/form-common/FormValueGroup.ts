import * as _ from 'lodash';
import * as Stream from 'mithril/stream';
import FormValue from './FormValue';

class FormValueGroup<T> {
  is_valid: Stream.Stream<boolean>;
  is_modified: Stream.Stream<boolean>;
  reset: () => void;
  save: () => void;

  constructor(original: T) {
    this.initFormValues(original);

    const form_value_list = this.getFormValueList();

    Stream.merge(form_value_list).map(() => this.checkValidateAll());

    this.is_modified = Stream.merge(_.map(form_value_list, 'is_modified')).map((modified_list) => modified_list.indexOf(true) >= 0);
    this.is_valid = Stream.merge(_.map(form_value_list, 'error_message')).map((error_message_list) => error_message_list.join('').trim().length === 0);
    this.reset = () => form_value_list.map((stream) => stream.reset());
    this.save = () => form_value_list.map((stream) => stream.save());
  }

  initFormValues(original: T) {
    // TODO: set form value
  }

  getFormValueList(): Array<FormValue<any>> {
    return [];
  }

  checkValidateAll() {
    // TODO check validate and set error message...
  }

  toFormData(): FormData {
    return new FormData();
  }

  toObject() {
    return {};
  }
}

export default FormValueGroup;

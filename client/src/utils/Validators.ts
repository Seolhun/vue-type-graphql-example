export interface ValidationResponse {
  result: boolean;
  msg: string;
}

class Validators {
  number: RegExp;
  upper_alphabet: RegExp;
  lower_alphabet: RegExp;
  korean: RegExp;
  special_characters: RegExp;

  constructor() {
    this.number = /[0-9]*/;
    this.upper_alphabet = /[A-Z]*/;
    this.lower_alphabet = /[a-z]*/;
    this.korean = /[가-힣]*/;
    this.special_characters = /[\@\!\#\$\%\^\&\*\(\)\_\+\=\-\.\,\>\<\?\/\`\~\"\:\'\;\\]*/;
  }

  isName(name: string) {
    if (!this.upper_alphabet.test(name)) {
      return { result: false, msg: 'Requirement upper alphabet'};
    } else if (!this.lower_alphabet.test(name)) {
      return { result: false, msg: 'Requirement lower alphabet'};
    } else if (name.length < 2) {
      return { result: false, msg: 'Requirement over 2 characters'};
    }
    return { result: true, msg: ''};
  }

  isPassword(password: string): ValidationResponse {
    if (!this.number.test(password)) {
      return { result: false, msg: 'Requirement number'};
    } else if (!this.upper_alphabet.test(password)) {
      return { result: false, msg: 'Requirement upper alphabet'};
    } else if (!this.lower_alphabet.test(password)) {
      return { result: false, msg: 'Requirement lower alphabet'};
    } else if (!this.special_characters.test(password)) {
      return { result: false, msg: 'Requirement lower special_characters'};
    } else if (password.length < 8) {
      return { result: false, msg: 'Requirement over 8 characters'};
    }
    return { result: true, msg: ''};
  }
}

export default Validators;

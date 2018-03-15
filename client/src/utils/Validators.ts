interface ValidationResponse {
  result: boolean;
  msg: string;
}

class Validators {
  static number: RegExp = /[0-9]+/;
  static upper_alphabet: RegExp = /[A-Z]+/;
  static lower_alphabet: RegExp = /[a-z]+/;
  static korean: RegExp = /[가-힣]+/;
  static special_characters: RegExp = /[\@\!\#\$\%\^\&\*\(\)\_\+\=\-\.\,\>\<\?\/\`\~\"\:\'\;\\]*/;
  static special_character: string = '`~!@#$%^&*()_-=+.>,</?;:\'\\\"';

  static isName(name: string) {
    if (name.length < 2) {
      return { result: false, msg: 'Requirement over 2 characters'};
    } else if (Validators.korean.test(name)) {
      return { result: false, msg: 'Never use Korean'};
    } else if (!Validators.special_characters.test(name)) {
      return { result: false, msg: `Requirement lower special_characters(${Validators.special_character})`};
    }
    return { result: true, msg: ''};
  }

  static isPassword(password: string): ValidationResponse {
    if (password.length < 8) {
      return { result: false, msg: 'Requirement over 8 characters'};
    } else if (!Validators.number.test(password)) {
      return { result: false, msg: 'Requirement number'};
    } else if (!Validators.upper_alphabet.test(password)) {
      return { result: false, msg: 'Requirement upper alphabet'};
    } else if (!Validators.lower_alphabet.test(password)) {
      return { result: false, msg: 'Requirement lower alphabet'};
    } else if (!Validators.special_characters.test(password)) {
      return { result: false, msg: `Requirement lower special_characters(${Validators.special_character})`};
    }
    return { result: true, msg: ''};
  }
}

export { Validators, ValidationResponse };

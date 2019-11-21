import validator from "validator";

const number: RegExp = /[0-9]+/;
const upper_alphabet: RegExp = /[A-Z]+/;
const lower_alphabet: RegExp = /[a-z]+/;
const korean: RegExp = /[가-힣]+/;
const special_characters: RegExp = /[\@\!\#\$\%\^\&\*\(\)\_\+\=\-\.\,\>\<\?\/\`\~\"\:\'\;\\]*/;
const special_character: string = "`~!@#$%^&*()_-=+.>,</?;:'\\\"";

export interface ValidationResponse {
  result: boolean;
  msg: string;
}

export const isEmail = (email: string): ValidationResponse => {
  if (email.length < 4) {
    return { result: false, msg: "Requirement email" };
  } else if (!validator.isEmail(email)) {
    return {
      result: false,
      msg: `${email} is not valid. Input the right Email.`
    };
  }
  return { result: true, msg: "" };
};

export const isName = (name: string): ValidationResponse => {
  if (name.length < 2) {
    return { result: false, msg: "Requirement over 2 characters" };
  } else if (korean.test(name)) {
    return { result: false, msg: "Never use Korean" };
  } else if (!special_characters.test(name)) {
    return {
      result: false,
      msg: `Requirement lower special_characters(${special_character})`
    };
  }
  return { result: true, msg: "" };
};

export const isPassword = (password: string): ValidationResponse => {
  if (password.length < 8) {
    return { result: false, msg: "Requirement over 8 characters" };
  } else if (!number.test(password)) {
    return { result: false, msg: "Requirement number" };
  } else if (!upper_alphabet.test(password)) {
    return { result: false, msg: "Requirement upper alphabet" };
  } else if (!lower_alphabet.test(password)) {
    return { result: false, msg: "Requirement lower alphabet" };
  } else if (!special_characters.test(password)) {
    return {
      result: false,
      msg: `Requirement lower special_characters(${special_character})`
    };
  }
  return { result: true, msg: "" };
};

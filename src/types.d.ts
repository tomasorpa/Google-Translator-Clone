import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = keyof typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;
export type State = {
  fromLanguage: FromLanguage;
  toLanguage: SUPPORTED_LANGUAGES;
  textToTranslate: string;
  translatedText: string;
  isLoading: boolean;
};
/* UMS */

export type Action =
  | { type: "SET_FROM_LANGUAGE"; payload: FromLanguage }
  | { type: "SET_TO_LANGUAGE"; payload: SUPPORTED_LANGUAGES }
  | { type: "SET_SWITCH_LANGUAGES" }
  | { type: "SET_TEXT_TO_TRANSLATE"; payload: string }
  | { type: "SET_TRANSLATED_TEXT"; payload: string };

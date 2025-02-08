import { useReducer } from "react";
import { Action, FromLanguage, Language, State } from "../types";

export const useStore = () => {
    const initialState: State = {
      fromLanguage: "fr",
      toLanguage: "en",
      textToTranslate: "",
      translatedText: "",
      isLoading: false,
    };

    const reducer = (state: State, action: Action) => {
      const { type } = action;
      switch (type) {
        case "SET_FROM_LANGUAGE":
          return {
            ...state,
            fromLanguage: action.payload,
          };
        case "SET_SWITCH_LANGUAGES":
          return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
          };
        case "SET_TO_LANGUAGE":
          return {
            ...state,
            toLanguage: action.payload,
          };
        case "SET_TEXT_TO_TRANSLATE":
          return {
            ...state,
            textToTranslate: action.payload,
            isLoading: true,
          };
        case "SET_TRANSLATED_TEXT":
          return {
            ...state,
            translatedText: action.payload,
            isLoading: false,
          };
        default:
          return state;
      }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const setFromLanguage = (payload:FromLanguage) => {
        dispatch({
            type: "SET_FROM_LANGUAGE",
            payload
        });
    }
    const setToLanguage = (payload:Language) => {
        dispatch({
            type: "SET_TO_LANGUAGE",
            payload
        });
    }
    const switchLanguages = () => {
        dispatch({
            type:"SET_SWITCH_LANGUAGES"
        })
    }
    return {
      state,
      ...state,
      setFromLanguage,
      setToLanguage,
      switchLanguages,
    };
}
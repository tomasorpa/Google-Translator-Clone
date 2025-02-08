import { useStore } from "../hooks/useStore";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  AUTO_LANGUAGE,
  FROM_LANGUAGES,
  SUPPORTED_LANGUAGES,
} from "../constants";
import React, { FC } from "react";
import { FromLanguage, Language } from "../types";
/* 
interface Props {
  onChange: (language: Language) => void;
  fromLanguage: FromLanguage;
} */
type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: "to";
      value: Language;
      onChange: (language: Language) => void;
    };

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleOnChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as Language);
  };
  return (
    <FormControl
      size="small"
      sx={{
        width: {
          xs: 100,
          sm: 150,
          md: 250,
        },
      }}
    >
      <Select
        value={value}
        onChange={handleOnChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        {/* Opción vacía para permitir `displayEmpty` */}
        {type === "from" && (
          <MenuItem value={AUTO_LANGUAGE.auto}>Auto</MenuItem>
        )}
        {/* Opciones válidas */}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <MenuItem key={key} value={key}>
            {literal}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

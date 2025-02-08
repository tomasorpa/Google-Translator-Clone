import { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SwitchingArrows } from "./components/Icons";
import { AUTO_LANGUAGE } from "./constants";
import { LanguageSelector } from "./components/LanguageSelector";
import { FromLanguage } from "./types";
import { Grid, Grid2 } from "@mui/material";

function App() {
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    switchLanguages,
  } = useStore();
  return (
    <>
      <main>
        <h1>Google Translator</h1>
        <Grid2
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <LanguageSelector
            onChange={setFromLanguage}
            value={fromLanguage}
            type="from"
            
          />

          <Button
            variant="link"
            onClick={switchLanguages}
            style={{
              flexShrink:1
            }}
            disabled={fromLanguage === AUTO_LANGUAGE}
          >
            <SwitchingArrows />
          </Button>

          <LanguageSelector
            onChange={setToLanguage}
            value={toLanguage}
            type="to"
          />
        </Grid2>
      </main>
    </>
  );
}

export default App;

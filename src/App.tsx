import React from 'react';
import Welcome from "./components/Welcome";

function App() {
  const {REACT_APP_RESUME_LINK, REACT_APP_GITHUB_LINK, REACT_APP_LINKEDIN} = process.env
  return (
    <Welcome githubLink={REACT_APP_GITHUB_LINK} linkedIn={REACT_APP_LINKEDIN} resumeLink={REACT_APP_RESUME_LINK} />
  );
}

export default App;

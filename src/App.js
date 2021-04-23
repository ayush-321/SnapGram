import React, { useState, useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback';
// import theme from 'styled-theming';


const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => 
  props.theme.mode==='dark' ? '#111' : '#EEE'};
  color: ${props =>
  props.theme.mode === 'dark' ? '#EEE' : '#111'};
  
}
`;


function getInitialTheme(){
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
}


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle></GlobalStyle>
    <div className="App">
    <button className="dark-btn" onClick={e => setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}><span>🌙</span></button>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={ setSelectedImg } />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
    </ThemeProvider>
  );
}

export default App;

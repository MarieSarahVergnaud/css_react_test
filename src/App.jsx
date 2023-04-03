import React from 'react';
import styled from 'styled-components';
import './assets/App.css'



function App() {

  const SEC = styled.section`
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 100%;
`;

  const ALL = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
background: papayawhip;
gap: 10px;
box-shadow: 11px 10px 9px 3px rgba(0,0,0,0.26);
border-radius: 20px;
border-color: black;
font-family: Courier New, Courier;
height: 100%;
padding:10px;

`;



  const Title = styled.h1`

color: #52b69a;
font-familly: Courier New, Courier;


`;

  const SousTitre = styled.h2`
display: flex;
align-items: center;
font-size:20px;
flex-direction: column;
padding: 10px;
color: #fb8500;


`;

  const Immg = styled.img`
box-shadow: 11px 10px 9px 3px rgba(0,0,0,0.26);
border-radius: 20px;
border-width: 50px;
border-color: black;
border: 3px ridge black;
gap: 10px;
`;

  return (

    <SEC>
    
      <ALL>
        
        <Title>Mara LeChat</Title>
        
        <Immg src="data:image/jpeg;base64,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" />

        <SousTitre> Craft And Stop Motion</SousTitre>
       <button> <a href="https://www.etsy.com/fr/shop/Maralechat?ref=simple-shop-header-name&listing_id=1290843142">Boutique</a></button>
<br></br>
<br></br>
<br></br>
        <a href="https://www.instagram.com/mara_lechat/"> <img src="src\assets\instagram.png" height= "20px"/> </a>
        <a href="https://www.tiktok.com/@maralechat"><img src="src\assets\tik-tok.png" height= "20px"/> </a>
      
        <a href="https://www.youtube.com/@mara.animation5931"><img src="src\assets\youtube.png" height= "20px"/> </a>
        <h3>  🐛 🐔  🐍 🐜 </h3>
      </ALL>
    </SEC>
  );
}

export default App;

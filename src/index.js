import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Velo from './Velo';
import Unvelo from './Unvelo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Acceuil from './Acceuil';
import velo1 from './image/mm.jpg'
import velo2 from './image/bh.jpeg'
import velo3 from './image/hh.jpg'
import velo4 from './image/tt.jpg'
import velo5 from './image/rr.jpg'
import velo6 from './image/ss.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
const listevelo=[{
  identifient:1,
  nom:"Mondraker",
  type:"The Mondraker Summum isn’t just a fun model name to pronounce, it’s also fast. The aluminum version of this bike has been piloted to numerous national titles and World Cup wins by the likes of Eleonora Farina, Laurie Greenland, and Brook MacDonald. Today the brand has a carbon fiber version on offer, and Mondraker says that one of the sizes weighs 2800g before the shock is installed.",
  img: velo1,
  url: 'https://www.singletracks.com/mtb-gear/mondraker-revises-the-summum-dh-bike-with-a-new-carbon-frame'
},
{
  identifient:2,
  nom:"Bh lynx trail",
  type:"velo tout terrain",
  img: velo2,
  url: 'https://www.mountainbike.es/noticias/nueva-bh-lynx-trail-carbon-probamos-su-bici-mas-divertida_256476_102.html'
},
{
  identifient:3,
  nom:"Peregrin",
  type:"velo tout terrain",
  img: velo3,
  url: 'https://singletrackworld.com/2019/05/10-more-stunning-steel-full-suspension-bikes-you-cannot-ignore/'
},
{
  identifient:4,
  nom:"foes",
  type:"velo tout terrain",
  img: velo4,
  url: 'https://wallpapercave.com/tom-jerry-wallpapers'
},
{
  identifient:5,
  nom:"Santa Cruz",
  type:"velo tout terrain",
  img: velo5,
  url: 'https://offerup.com/item/detail/1040531684'
},
{
  identifient:6,
  nom:"Santa Cruz",
  type:"velo tout terrain",
  img: velo6,
  url: 'https://www.photos-public-domain.com/2011/01/06/sliced-orange/'
}]
root.render(
  <BrowserRouter>
     <Velo />
     <Routes>
     <Route path="/" element={<Acceuil/>}/>
     <Route path="/Unvelo/:identifient" element={<Unvelo listevelo={listevelo}/>}/>
     <Route path="/velos" element={<App listevelo={listevelo}/>}/>
     </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

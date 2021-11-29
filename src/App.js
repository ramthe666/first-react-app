import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const [name,setToname] = useState("");

  const nameType =()=>{
    document.write("Your name is =", name);
  }


  return (
    <div className="App">
      <h1>Anime Blog Stacks&trade;</h1>
      <h2>Anime</h2>
      <h3>Anime Blog</h3>
      <h4>Animeya</h4>
      <h5>Animeda</h5>
      <h6>Anime always</h6>
      <p>Anime Blog StacksWhen it comes to raising funds, a team’s specific needs should be front and center--not an afterthought. There’s no step more important in a project’s journey. It’s oftentimes the first interaction with their future community and can set the tone, for better or worse, of what’s to come.</p>
      <p>coming zoooon</p>
      <img src="https://cdn.mwallpapers.com/photos/wallpapers/anime/itachi-uchiha-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4khd-wallpapers-desktop-background-android-iphone-1080p-4k-lg1w3.jpg" alt="uchiha" />
   <br/>   <label> Name : </label> <input
id="addressid"
  type='text'
  placeholder='Enter Your Name'
  name="toaddress"
  required
  onChange={event => setToname( event.target.value)}
  
/><br/>
      <button onClick={()=>nameType()}>open</button>
      <logo>gif</logo>
    </div>
  );
}

export default App;

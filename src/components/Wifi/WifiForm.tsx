import { useState } from 'react';

export const WifiForm = () => {
  const code = 'O8I9Bldh0vvInL1mrnl3go';
  const [userCode, setUserCode] = useState('');
  

  const formSubmit = () => {
    if (userCode === code) {
      document.location.href = 'https://hamzaiqbal.short.gy/accessibility-test-wifi-success';      
      return;
    }

    document.location.href = 'https://hamzaiqbal.short.gy/accessibility-test-wifi-failure';
  };


  return <section className="wifi-container">
    <h1>Connexion au Wifi</h1>

    <form className='wifi-form' noValidate onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}>
      <label htmlFor="wificode">Saisissez le Code Wifi :</label>
      <input id="wificode" name="wificode" type="text" autoFocus autoComplete='off' onChange={(e) => setUserCode(e.target.value.trim())} />
      <button className='button' type="submit" disabled={userCode === ''}>Connexion</button>
    </form>
  </section>
}
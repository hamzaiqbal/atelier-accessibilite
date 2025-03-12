import { useState } from 'react';

export const WifiCode = () => {
  const [accessibleFont, setAccessibleFont] = useState(false);

  return <section className="wifi-container">
    <h1>Code Wifi</h1>

    <p className={`code ${accessibleFont ? 'accessible-font' : ''}`}>
      O8I9Bldh0vvInL1mrnl3go
    </p>

    {!accessibleFont
    && <button className='button' type="button" onClick={() => setAccessibleFont(true)}>Besoin d'aide ?</button>
    }
  </section>
  
}
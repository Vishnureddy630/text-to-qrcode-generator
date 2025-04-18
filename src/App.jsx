import React, { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [key, setKey] = useState('');
  const [qrcode, setQrcode] = useState('');

  const handle = async () => {
    setQrcode('');
    try {
      const qrDataUrl = await QRCode.toDataURL(key);
      setQrcode(qrDataUrl);
    } catch (err) {
      console.error('QR Code generation failed:', err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Text to QR Code Generator</h1>
      
      <input
        type="text"
        placeholder="Enter text to convert"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={styles.input}
      />

      <button onClick={handle} style={styles.button}>
        ✔ Generate QR Code
      </button>

      {qrcode && (
        <div style={styles.qrContainer}>
          <img src={qrcode} alt="Generated QR Code" style={styles.qrImage} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  input: {
    padding: '0.6rem',
    width: '300px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '2rem',
  },
  qrContainer: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  qrImage: {
    height: '200px',
    width: '200px',
  },
};

export default App;

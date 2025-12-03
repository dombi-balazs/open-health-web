import { useState } from 'react';
import './App.css';
import algoImage from './assets/algorand.jpg'; 

const WALLET_ADDRESS = "NPRGVTM6CUYLGB6PDHVBYSABLYGCCMQREJW6LGQXET4NL3NFBZ3VCA7RAQ";

function CryptoDonation() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(WALLET_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="donation-container glass-panel">
            <h3 className="donation-title">Support the project</h3>
            
            <p className="donation-text">
                If you find this technology demonstration useful, you can support further development via the <strong>Algorand</strong> network.
            </p>

            <div className="donation-image-wrapper">
                <img src={algoImage} alt="Algorand" className="algo-logo" />
            </div>

            <div className="wallet-box">
                <span className="wallet-address">{WALLET_ADDRESS}</span>
                <button 
                    className={`copy-btn ${copied ? 'copied' : ''}`} 
                    onClick={handleCopy}
                    title="Copy address"
                >
                    {copied ? "COPIED!" : "COPY"}
                </button>
            </div>
            
            <p className="donation-subtext">
                Accepts ALGO and ASA tokens.
            </p>
        </div>
    );
}

export default CryptoDonation;
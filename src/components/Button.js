import { useAppKit } from '@reown/appkit/react';
import './Button.css';

export default function Button() {
  // Use modal hook
  const { open } = useAppKit();

  return (
    <>
      <button className="wallet-connect-btn" onClick={() => open()}>
        Connect Wallet
      </button>
  
    </>
  );
}

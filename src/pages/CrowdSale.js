import {
  connectWallet,
  getCurrentWalletConnected,
  pledgeFunds,
} from "../Components/utils/walletInteract";
import { useState, useEffect } from "react";

const ethereum = window.ethereum;
if (ethereum) {
  ethereum.on("accountsChanged", function (accounts) {
    console.log(accounts[0]);
  });
}
export const CrowdSale = () => {
  const [price, setCurrentPrice] = useState(0);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [pledgeAmount, setPledge] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    addWalletListener();
    console.log(pledgeAmount);
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };
  const submitPledge = async () => {
    await pledgeFunds(pledgeAmount);
    setStatus(status);
  };
  return (
    <body>
      <div className="flex  justify-end align-right py-3 px-5 md:px-10 bg-gray-50">
        <div className=" lg:flex gap-5  justify-right ">
          <button id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (
              "Connected: " +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span>Connect Wallet</span>
            )}
          </button>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-50   ">
        <div className="bg-gray-400 max-w-md w-full space-y-8 rounded-xl p-9 shadow-2xl ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 7H7v6h6V7z" />
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                clip-rule="evenodd"
              />
            </svg>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Enter the BNB amount you would like to pledge
            </h2>
          </div>
          <form className="mt-8 space-y-4">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="bnbamount justify-end" className="sr-only">
                  Email address
                </label>
                <input
                  id="bnbamount"
                  name="bnbamount"
                  type="number"
                  step="0.01"
                  zst
                  min="0.01"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  placeholder="BNB amount"
                  onChange={(event) => setPledge(event.target.value)}
                />
              </div>

              <div className="flex flex-row py-2">
                <button
                  className="group relative flex justify-center px-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    setCurrentPrice(4363 * pledgeAmount);
                    console.log(price);
                    console.log(pledgeAmount);
                  }}
                >
                  Calculate your MTOKEN per BNB
                </button>
                <h1 className="px-2">You will get : {price}</h1>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  pledgeAmount > 0 ? submitPledge() : console.log("cancel");
                }}
              >
                Submit Pledge
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

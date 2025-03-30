import { useState, useEffect } from "react";
import * as ethers from "ethers";

export default function Hextract() {
  const [text, setText] = useState<string>("");
  const [addresses, setAddresses] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null); // To store toast message

  const extractAddresses = () => {
    const regex = /0x[a-fA-F0-9]{40}/g;
    const matches = text.match(regex) || [];
    const uniqueMatches = Array.from(new Set(matches));
    setAddresses(uniqueMatches);
  };

  useEffect(() => {
    if (text) {
      extractAddresses();
    } else {
      setAddresses([]);
    }
  }, [text]);

  const pasteText = async () => {
    try {
      const clipText = await navigator.clipboard.readText();
      setText(clipText);
    } catch (err) {
      console.error("Failed to read clipboard", err);
    }
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setToastMessage("Copied to clipboard!"); // Show toast
      setTimeout(() => setToastMessage(null), 2000); // Hide toast after 2 seconds
    });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <button
          onClick={pasteText}
          className="h-12 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none transition duration-300"
        >
          Paste Text
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text containing Ethereum addresses"
          className="h-32 p-4 bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
        />
      </div>
      <div className="w-full space-y-3 mt-6">
        {addresses.length === 0 ? (
          <p className="text-red-400 font-semibold">No Ethereum addresses found in the text input.</p>
        ) : (
          addresses.map((addr) => {
            const checksum = ethers.getAddress(addr.toLowerCase());
            const isChecksumCorrect = addr === checksum;
            return (
              <div key={addr} className="p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-900">
                <div className="font-mono text-gray-300" title={addr}>
                  <div className="break-all">{addr}</div>
                  {addr.toLowerCase() !== addr && (
                    <div className={isChecksumCorrect ? "text-center text-green-500 font-semibold" : "text-center text-red-500 font-semibold"}>
                      {isChecksumCorrect ? <span className="text-xs">✔&nbsp;Checksum Match</span> : <span className="text-xs">❌&nbsp;No Checksum Match</span>}
                    </div>
                  )}
                </div>
                <div className="flex mt-4 gap-4">
                  <button
                    onClick={() => copyToClipboard(addr)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none transition duration-300"
                  >
                    Copy Raw
                  </button>
                  <button
                    onClick={() => copyToClipboard(checksum)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none transition duration-300 flex-1"
                  >
                    Copy with Checksum
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </>
  );
}


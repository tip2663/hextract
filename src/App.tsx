import Hextract from './Hextract'
import logo from './logo.png'

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-900 text-white">
    <main className="flex flex-col items-center p-8 w-full max-w-6xl mx-auto">
      <img src={logo} alt="Hextract Logo" className="w-24 h-auto mb-4" />
      <h1 className="text-4xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-400">
        Hextract
      </h1>
      <h2 className="text-xl font-semibold mt-2 text-gray-400">Ethereum Address Text Extractor </h2>
      <h3 className="font-semibold text-gray-400">dev'd by Tip from $KRAW</h3>
      <p className="text-center mt-4 text-sm text-gray-300 max-w-prose">
        Hextract is a simple tool designed to quickly extract Ethereum addresses from any texts. Whether you're browsing group chats or social media posts, simply paste any text.
        Hextract will identify and format all Ethereum addresses it can find for easy copy-paste-magic, simplifying airdrops and such.
      </p>
      <p className="text-center mt-4 text-sm text-gray-300 max-w-prose">
        I am grateful for donations 💜
      </p>
      <p className="text-center text-sm text-gray-300 max-w-prose">
        0x3B2a1180425C5D1364367Aa7309099748e534E2b
      </p>
      <div className="w-full max-w-lg mt-6 p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200">
        <Hextract />
      </div>
      <p className="text-center text-sm text-gray-300 max-w-prose mt-2">
        Pro tip: Bookmark this app or pin it to your home screen!
      </p>
    </main>
  <footer className="mt-auto w-full p-4 bg-gray-800 text-center text-sm text-gray-400 mt-4">
        <p>
          <a href="https://github.com/tip2663/hextract" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            GitHub
          </a>
          {' | '}
          <a href="https://www.reddit.com/u/tip2663" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            Reddit
          </a>
          {' | '}
          <a href="https://x.com/tip2663" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            X
          </a>
        </p>
      </footer>
      </div>
  )
}

export default App

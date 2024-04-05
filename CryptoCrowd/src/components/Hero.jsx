import React from 'react'

function Hero() {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="bg-gray-900 text-white">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Crypto Crowd Funding</h2>

        <p className="mt-4">
        "Join the crypto revolution on our platform, where you can discover the latest cryptocurrency campaigns, host your own, and stay updated with real-time rates."
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Campaigns
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' width={60} height={60} alt="BitCoin"></img>
          </span>

          <h2 className="mt-2 font-bold">BitCoin</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            $66,750.37
          </p>
        </a>

        {/* Second card */}
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png" alt="etheruem" />
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Ethereum</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts
          </p>
        </a>

        {/* Third card */}
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/825.png" alt="Tether" />
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Tether USDt</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Tether tokens can be used as digital currency on many leading blockchains
          </p>
        </a>

        {/* Fourth card */}
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src="https://gastcoin.com/wp-content/uploads/2021/12/Diseno-sin-titulo-8.png" alt="BNB" />
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">BNB</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Build'N'Build (BNB) is a digital asset that's used as a utility token on the BNB chain.
          </p>
        </a>

        {/* fifth card */}
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="solana" />
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Solana</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Solana is an open-source blockchain platform to significantly enhance the scalability of blockchain technology.
          </p>
        </a>

        {/* sixth card */}

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" alt="USDC" />
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">USDC</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          USDC branded itself as the safest stablecoin in the market with regulated and fully backed reserves. 
          </p>
        </a>
        
        {/* Repeat the above card template for additional cards */}
      </div>
    </div>
  </div>
</section>


{/* <section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Crypto Crowd Funding</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
          iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
          minima aliquid tempora. Obcaecati, autem.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Campaigns
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' width={60} height={60}></img>
          </span>

          <h2 className="mt-2 font-bold">BitCoin</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          $66,750.37
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section> */}
    </div>
  )
}

export default Hero

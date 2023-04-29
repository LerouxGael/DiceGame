import MyHead from "../components/MyHead"
import Header from "../components/Header"


function HomePage() {
    return (
    <>
        <body class="p-4 radial-bg min-h-screen">
            <main class="text-lg bg-white bg-active-player-1 font-Lato min-h-[calc(100vh-28px)]">
                <MyHead>
                    /* Todo : add icon */
                </MyHead>
                <div>Hello Welcome to Next.js!</div>
                <Header />
            </main>
        </body>
    </>
    )
  }
  
  export default HomePage
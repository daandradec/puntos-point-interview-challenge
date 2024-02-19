import Navbar from "@/components/Navbar/Navbar";

function Layout({children}: { children: React.ReactNode }) {
  return (
    <>
        <Navbar/>
        <main>
            {children}
        </main>
        {/* <main className="flex flex-col lg:flex-row px-8 w-full">
            <div className="lg:flex-1 w-full lg:w-auto">
                {children}
            </div>
            <aside className="lg:flex-initial w-full lg:w-[400px]">
                
            </aside>
        </main> */}
    </>
  )
}

export default Layout
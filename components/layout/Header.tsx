import Link from "next/link"

const Header: React.FC = () =>{
    return(
        <div className="flex justify-between py-9 px-6 bg-black opacity-90  text-amber-50 items-center font-serif">
          <h1 className="text-2xl">JANA</h1>
          <nav>
            <ul className="flex gap-1">
                 <li className="hover:text-gray-400">
                  <Link href="/room">Room</Link>
                 </li>

                  <li className="hover:text-gray-400">
                  <Link href="/room">Mansion</Link>
                 </li>

                  <li className="hover:text-gray-400">
                  <Link href="/room">Countryside</Link>
                 </li>
            </ul>
          </nav>

          <div className="flex items-center gap-1">
  <div className="flex items-center gap-2 px-3 py-2 bg-[whitesmoke] text-gray-400 rounded-md w-full max-w-sm">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
       className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
             5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 bg-transparent outline-none placeholder:text-gray-400 text-gray-800"
  />
</div>


          <button className="bg-blue-500 hover:bg-blue-300 py-1 px-2 rounded">SignIn </button>
            <button className="bg-blue-500 hover:bg-blue-300 py-1 px-2 rounded">SignIn </button>
          </div>
        </div>
    )
}

export default Header;
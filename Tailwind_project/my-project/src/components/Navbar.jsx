const Navbar = () => {
  return (
    <header className="w-full rounded-full bg-white px-5 py-3 text-slate-900 shadow-lg sm:px-7">
      <nav  className="flex items-center justify-between ">
        <a href="#home" className="flex  items-center gap-2.5" >
          <span className="flex size-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
            AS
          </span>
          <span className="text-xl font-semibold tracking-tight text-orange-500">
            Anshuman
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium sm:gap-x-7">
          <li><a href="#home" className="transition-colors hover:text-orange-500">Home</a></li>
          <li><a href="#services" className="transition-colors hover:text-orange-500">Services</a></li>
          <li><a href="#portfolio" className="transition-colors hover:text-orange-500">Portfolio</a></li>
          <li><a href="#about" aria-current="page" className="text-orange-500">About</a></li>
          <li><a href="#contact" className="transition-colors hover:text-orange-500">Contact</a></li>
          <li>
            <a href="#pages" className="inline-flex items-center gap-1 transition-colors hover:text-orange-500">
              Pages
              <span aria-hidden="true" className="text-[10px]">▼</span>
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}

export default Navbar

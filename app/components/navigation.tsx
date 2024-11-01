export function Navigation() {
  const buttonStyle = "focus:outline-none text-white bg-slate-500  hover:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  return (
    <header className="flex w-full justify-center">
      <ul className="flex flex-row gap-2 w-auto mt-2">
        <li className="mx-1"><button type="button" className={buttonStyle}>Charts</button></li>
        <li className="mx-1"><button type="button" className={buttonStyle}>Pies</button></li>
        <li className="mx-1"><button type="button" className={buttonStyle}>Dotted</button></li>
      </ul>
    </header>
  );
}

import { Logo } from "./logo";

export function Header() {
  return (
    <header className="bg-qd-500 text-qd-100">
      <div className="centered-container h-16 flex flex-row items-center justify-between">
        <Logo />
        <p>Menu</p>
      </div>
    </header>
  );
}

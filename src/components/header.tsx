import { DecapMenu } from "@/@types/decap-menu";
import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import { getMarkup } from "@/lib/cms-content";

export function Header() {
  const {
    data: { sections },
  } = getMarkup("cmsContent/components", "menu.md") as unknown as {
    data: DecapMenu;
  };

  return (
    <header className="bg-qd-500 text-qd-100 px-4 lg:px-0">
      <div className="centered-container h-16 flex flex-row items-center justify-between">
        <Logo />
        <Menu sections={sections} />
      </div>
    </header>
  );
}

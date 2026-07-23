import { LogoIcon } from "@/components/shared/logo-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/shared/brand-icons";
import { ArrowUpRight, Globe, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Website", href: "https://anishshobithps.com", Icon: Globe },
  {
    label: "GitHub",
    href: "https://github.com/anishshobithps",
    Icon: GithubIcon,
  },
  { label: "X", href: "https://x.com/n10nce", Icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anishshobithps/",
    Icon: LinkedinIcon,
  },
];

function App() {
  return (
    <div className="w-[320px] bg-background text-foreground">
      <header className="flex items-center gap-3 p-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-card">
          <LogoIcon size={26} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight">
            Anish Shobith P S
          </p>
          <p className="truncate text-xs text-muted-foreground">
            Software Developer
          </p>
        </div>
      </header>

      <Separator />

      <nav className="flex flex-col gap-0.5 p-2">
        {links.map(({ label, href, Icon }) => (
          <Button
            key={label}
            asChild
            variant="ghost"
            size="sm"
            className="h-9 justify-start font-normal"
          >
            <a href={href} target="_blank" rel="noreferrer">
              <Icon />
              <span>{label}</span>
              <ArrowUpRight className="ml-auto text-muted-foreground" />
            </a>
          </Button>
        ))}
      </nav>

      <Separator />

      <footer className="flex items-center justify-between p-2 pl-3">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5" />
          Mangalore, India
        </span>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="font-normal text-muted-foreground"
        >
          <a href="mailto:anish.shobith19@gmail.com">
            <Mail />
            Email
          </a>
        </Button>
      </footer>
    </div>
  );
}

export default App;

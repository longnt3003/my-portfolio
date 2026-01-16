import { socialLinks } from "../../data/socials";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, i) => {
        const Icon = link.icon;
        return (
          <a
            key={i}
            href={link.href}
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#13bbff] text-[#13bbff] transition duration-300 ease-in-out hover:scale-110 hover:bg-[#13bbff] hover:text-[#1b1f24] md:h-12 md:w-12"
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        );
      })}
    </div>
  );
}

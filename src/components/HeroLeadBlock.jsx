import { WA_LINK, socials } from "../data/contact";

const services = [
  "Digital Marketing",
  "Talent Management",
  "Professional Event Organizer",
  "Entertainment",
];


export default function HeroLeadBlock() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#e9c349]/30 pt-6 text-left">
        {services.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[#e1e3e4]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e9c349]"></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-center gap-5">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#e9c349] text-[#111415] font-semibold px-8 py-4 rounded-sm hover:bg-[#f1d170] transition-colors"
        >
          Contact Us
        </a>
        <ul className="flex gap-6 text-sm text-[#a9acb4]">
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e9c349] hover:underline underline-offset-4 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
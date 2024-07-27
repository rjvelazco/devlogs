import Link from "next/link";
import { usePathname } from "next/navigation";

const initialPathSegmentRegex = new RegExp(/^\/[^\/]*/);

export const Nav = () => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Logs",
      url: "/logs",
    },
    {
      title: "About Me",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav>
      <ul className="font-light rounded-lg bg-gray-50 flex flex-row mt-0 border-0 bg-white">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink href={item.url}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const basePath = path.match(initialPathSegmentRegex)?.[0];

  const linkClasses = "block p-2 text-gray-900 hover:underline";
  const activeLinkClasses = `underline ${linkClasses}`;

  return (
    <Link
      href={href}
      className={basePath === href ? activeLinkClasses : linkClasses}
    >
      {children}
    </Link>
  );
};

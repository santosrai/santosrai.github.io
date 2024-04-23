import Link from "next/link";
import Image from 'next/image'
import config from "@/lib/config";

export default function Header() {
  const menu = {
    menuItems: {
      edges: [
        {
          node: {
            databaseId: 1,
            uri: "/",
            label: "Home",
          },
        },
        {
          node: {
            databaseId: 2,
            uri: "/projects",
            label: "Projects",
          },
        },
        {
          node: {
            databaseId: 3,
            uri: "/blog",
            label: "Blog",
          },
        },
        {
          node: {
            databaseId: 4,
            uri: "/about",
            label: "About",
          }
        },
        {
          node: {
            databaseId: 5,
            uri: "/contact",
            label: "Contact",
          }
        },

      ],
    }
  }

  return (
    <header >

      <div className="flex justify-between items-center py-4 md:flex-row md:items-center ">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <Image
            alt="Santosh Rai"
            className="mx-auto h-24 w-24 rounded-full shadow-lg"
            height={96}
            src={config.profileLogo}
            width={96}
          />
          <div className="flex flex-col md:text-left">
            <h1 className="mb-0">{config.siteName}</h1>
            <p>{config.intro}</p>
          </div>
        </div>
      </div>

      <nav className="flex justify-between gap-4 px-4 py-2">
        {!!menu &&
          menu.menuItems.edges.map((item) => (
            <Link className="button no-underline hover:bg-teal-400 border border-teal-400  items-center text-white px-3 py-2 rounded-md" key={item.node.databaseId} href={item.node.uri}>
              {item.node.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}

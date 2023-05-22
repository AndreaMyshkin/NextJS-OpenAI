import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../Logo";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export const AppLayout = ({ children }) => {
  const { user } = useUser();

  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-indigo-400 px-2">
          <div>
            <Logo />
          </div>
          <Link href="/posts/new" className="btn">
            New Post
          </Link>
          <Link href="/token-topup" className="block mt-2 text-center">
            <FontAwesomeIcon icon={faCoins} className="text-yellow-400" />
            <span className="pl-2">0 tokens available</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-indigo-400 to-purple-500">
          list of posts
        </div>
        <div className="bg-purple-500 flex items-center gap-2 border-t border-t-black/20 h-20 px-2">
          {!!user ? (
            <>
              <div className="min-w-[50px]">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-bold">{user.name}</div>

                <Link href="/api/auth/logout" className="text-sm block">
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <div>
              <div>You are not logged in</div>
              <Link href="/api/auth/login">Login</Link>
            </div>
          )}
        </div>
      </div>

      <div className="p-6"> {children}</div>
    </div>
  );
};

import useCount, { useCartCount } from "@/Hooks/useCount";
import useStore from "@/Hooks/useCount";
import useLogin from "@/Hooks/useLogin";
import { getItem } from "@/utilities/fakeDB";
// import { getCart } from "@/utilities/fakeDB";
import Link from "next/link";
import { useRouter } from "next/router";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const { login, username, updateLogin, updateUsername } = useLogin();
  // const { increment, addId, count } = useCount();
  const { random, setRandom } = useCartCount();
  const [totalCount, setTotalCount] = useState<number>();

  const defaultState: { count: 0; items: Set[] } = { count: 0, items: [] };
  const [cart, setCartCount] = useState<{ count: number; items: Set[] }>(
    defaultState
  );

  useEffect(() => {
    let c = getItem("cart");
    if (!c) c = defaultState;
    setCartCount(c);
  }, [random]);

  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-gray-500 border-gray-200 dark:bg-gray-900 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/addedCard"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-2">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                />
              </svg>
            </span>
            {cart?.count}
          </Link>
          <div className="flex md:order-2">
            <span className="mt-2">{username}</span>
            <button
              type="submit"
              className="ml-5 bg-slate-600 py-2 px-3 rounded"
              onClick={(e) => {
                updateLogin("Login");
                updateUsername("");
                router.push("/login");
              }}
            >
              {login}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

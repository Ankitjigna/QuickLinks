import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-slate-200">
      <section className="grid grid-cols-2 h-[45vh] ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold `}>
            The best URL shortener in the Market
          </p>

          <p className="px-40 text-center">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-slate-400 rounded-lg text-white  shadow-lg p-3 py-1 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-slate-400 rounded-lg  text-white shadow-lg p-3 py-1 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="Vector image"
            src={"/vectorr.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}

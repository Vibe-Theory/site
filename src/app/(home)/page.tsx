import { Users, BookIcon, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="font-grotesk flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] px-4 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full w-full bg-[#cd7f32] z-0 pointer-events-none hidden xl:block"
        style={{ 
          clipPath: 'polygon(0 0, 32% 0, 16% 100%, 0% 100%)' 
        }}
      />
      <div className="absolute inset-0 -z-10" />
      <div className="max-w-3xl mx-auto text-center space-y-6 relative">
        <div className="inline-flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          <span className="font-azeret text-sm font-medium text-slate-600 dark:text-slate-400">
            Community
          </span>
        </div>
        <h1 className="text-5xl font-medium p-2 md:text-6xl font-bold tracking-wide bg-gradient-to-b from-slate-500 to-slate-900 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
          Hytale Modding
        </h1>
        <div className="w-64 h-1 bg-orange-300 mx-auto rounded-sm" />
          <p className="text-lg p-2 md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Welcome to Hytale Modding!
            <span className='font-bold'> This is an unofficial community for modding Hytale</span>, providing guides, documentation, and resources.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-3 px-4 py-2 text-base md:text-lg rounded-lg bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-all duration-150 ease-out"
            >
              <BookIcon className="w-5 h-5 text-amber-500 dark:text-orange-300 transition-transform duration-300" />
              <span className="text-base md:text-lg text-amber-500 dark:text-orange-300">
                Documentation
              </span>
            </Link>
            <a
              href="https://discord.gg/54WX832HBM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-all duration-150 ease-out"
            >
              <MessageCircle className="w-4 h-4 text-cyan-600 dark:text-sky-600 transition-transform duration-300" />
              <span className="text-sm text-cyan-600 dark:text-sky-600">
                Discord
              </span>
            </a>
          </div>
      </div>
    </div>
  );
}

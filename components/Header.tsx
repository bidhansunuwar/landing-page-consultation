import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-10 flex items-center border-b border-slate-200/80 bg-white/90 px-5 py-6 backdrop-blur sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <Image
          src="/assets/secondary_logo_-_for_white_bg.png"
          alt="Brand logo"
          width={637}
          height={402}
          priority
          sizes="(max-width: 640px) 51px, 57px"
          className="h-8 w-auto object-contain sm:h-9"
        />
      </div>
    </header>
  );
}

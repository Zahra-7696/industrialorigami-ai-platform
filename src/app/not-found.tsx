import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-400">
          The requested page does not exist or the language route is invalid.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

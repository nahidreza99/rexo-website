import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="flex flex-col-reverse bg-teal-100 justify-between items-center md:flex-row">
        <div className="p-10 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Data to enrich your online business</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Shop Now</a>
          </div>
        </div>
        <div className="p-6">
          <Image src="/shoes-hero.svg" alt="Hero" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
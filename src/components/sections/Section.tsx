import Image from 'next/image';

export default function Section() {
  return (
    <section>
      <h1 className="text-3xl">Hello I&apos;m derodero👋</h1>
      <div className="my-6 flex space-x-8">
        <div className="w-1/4">
          <Image src="/icon-512.png" alt="icon" width={512} height={512} />
        </div>
        <p className="w-3/4 text-lg">{'This is dummy text. '.repeat(20)}</p>
      </div>
    </section>
  );
}

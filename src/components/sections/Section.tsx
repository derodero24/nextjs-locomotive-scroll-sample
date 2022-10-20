import Image from 'next/image';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Section(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) {
  return (
    <section {...props} className="my-8">
      <h1 className="text-3xl">Hello I&apos;m derodero👋</h1>
      <div className="my-6 flex space-x-8">
        <div className="w-1/4 drop-shadow">
          <Image src="/derodero24.png" alt="icon" width={460} height={460} />
        </div>
        <p className="w-3/4 text-lg">{'This is dummy text. '.repeat(20)}</p>
      </div>
    </section>
  );
}

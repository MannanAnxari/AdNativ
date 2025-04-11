import Image from "next/image";

export function ClientLogos() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 max-w-7xl border-centered pt-32">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Brands</h2>
          <p className="text-muted-foreground">
            The best brands choose FivePerks
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center justify-center">
            <Image
              src="/clients/1.png"
              alt="Client 1"
              width={120}
              height={60}
              className="invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clients/2.png"
              alt="Client 2"
              width={120}
              height={60}
              className="invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clients/3.png"
              alt="Client 3"
              width={120}
              height={60}
              className="invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clients/4.png"
              alt="Client 4"
              width={120}
              height={60}
              className="invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clients/5.png"
              alt="Client 5"
              width={120}
              height={60}
              className="invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clients/6.png"
              alt="Client 6"
              width={120}
              height={60}
              className="invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

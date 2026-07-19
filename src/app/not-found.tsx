import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ecru py-24 md:py-32 flex-1 flex flex-col">
      <div className="grid-container text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="display-md text-inkwell">Page not found</h1>
        <p className="body-lg text-inkwell/60 mt-4 max-w-[550px] mx-auto">
          realmspace can help you see, prove, and improve every activation. But we
          can&apos;t find this page — sorry.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors mt-8"
        >
          Go to the Homepage
        </Link>

        <div className="grid md:grid-cols-3 gap-4 mt-16 max-w-[700px] mx-auto w-full">
          {[
            { label: "Customer Stories", href: "/resources/case-studies" },
            { label: "What is realmspace?", href: "/products/realmspace" },
            { label: "Why Floats?", href: "/about" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="bg-white rounded-lg p-6 text-center hover:shadow-card transition-shadow"
            >
              <p className="text-sm font-medium text-inkwell">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

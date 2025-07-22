"use client";

export default function ServiceMarquee() {
  const services = [
    "GLASREINIGUNG",
    "TREPPENHAUSREINIGUNG",
    "UNTERHALTSREINIGUNG",
    "SONDERREINIGUNG",
    "BAUZWISCHENREINIGUNG",
  ];

  return (
    <div className="relative w-full overflow-hidden -mt-20 py-8">
      <div className="absolute left-0 top-0 z-10 h-full w-48 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-white via-white/90 to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services].map((service, idx) => (
          <span
            key={idx}
            className="mx-16 text-[6rem] font-extrabold text-[#f1f5f9] tracking-tight"
            style={{ letterSpacing: "-1px" }}
          >
            {service}
          </span>
        ))}
      </div>
        
    
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
    </div>
  );
}

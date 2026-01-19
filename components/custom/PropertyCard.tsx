// Property Card Component

import Image from "next/image";

type PropertyCardProps = {
  image: string;
  label: string;
  title: string;
};
const PropertyCard = ({ image, label, title }: PropertyCardProps) => (
  <div className="relative rounded-2xl overflow-hidden group h-71.5 w-full ">
    <Image
      src={image}
      alt={title}
      className="w-full object-cover"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="text-xs font-medium mb-2 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="flex gap-1 mt-3">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white/50" />
        <div className="w-2 h-2 rounded-full bg-white/50" />
      </div>
    </div>
  </div>
);
export default PropertyCard;

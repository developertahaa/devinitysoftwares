
interface BrandsSectionProps {
  title?: string;
  brands?: { name: string; logo: string }[];
}

const BrandsSection: React.FC<BrandsSectionProps> = ({
  title = "Our Partners",
  brands = [
    { name: "TechNova", logo: "brands/powerzone.png" },
    { name: "PixelCraft", logo: "brands/indigo.png" },
    { name: "InnoWave", logo: "brands/ssm.png" },
    { name: "CodeSphere", logo: "brands/ias.png" },
    { name: "DigitalPulse", logo: "brands/gympulse.png" },
    { name: "SkyNet", logo: "brands/realestate.png" },
  ]
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {brands.map((brand, index) => (
            <div key={index} className="logo-container flex items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="brand-logo"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/fallback.png";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
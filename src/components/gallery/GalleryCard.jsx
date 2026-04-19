import { forwardRef } from "react";

const GalleryCard = forwardRef(({ img }, ref) => {
  return (
    <div
      ref={ref}
      className="w-[300px] h-[400px] rounded-xl overflow-hidden bg-black shadow-2xl"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={img}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
      />

      {/* ink overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
});

export default GalleryCard;
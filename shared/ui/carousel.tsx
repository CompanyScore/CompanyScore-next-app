type CarouselProps = {
  children: React.ReactNode[];
  className?: string;
};

export const Carousel = ({ children, className = '' }: CarouselProps) => {
  return (
    <div
      className={`carousel carousel-center space-x-4 max-w-[1280px] w-full ${className}`}
    >
      {children.map((child, index) => (
        <div className="carousel-item" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

const Circle = ({ className }: { className: string }) => {
  return <div className={`w-8 h-8 rounded-full absolute ${className}`} />;
};

export default Circle;

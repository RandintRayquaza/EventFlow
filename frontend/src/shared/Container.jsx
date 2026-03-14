const Container = ({ children, className = '' }) => {
  return <div className={`mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
};

export default Container;
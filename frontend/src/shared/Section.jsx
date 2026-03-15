import Container from './Container';

const Section = ({ id, className = '', containerClassName = '', children }) => {
  return (
    <section id={id} className={`relative py-[100px] ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
import Container from './Container';

const Section = ({ id, className = '', containerClassName = '', children }) => {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
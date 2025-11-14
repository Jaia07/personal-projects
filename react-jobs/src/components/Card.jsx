const Card = ({ children, bg = "bg-gray-100" }) => {
  return (
    <section className={`${bg} p-4 rounded-lg shadow-md min-w-[40vw]`}>
      {children}
    </section>
  );
};

export default Card;

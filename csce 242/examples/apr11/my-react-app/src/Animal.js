import './Animal.css';

const Animal = (animal) => {
  return (
    <section className={animal.className}>
        <h3>{animal.name}</h3>
        <p>Pandas are the bestest</p>
        <img src={animal.image} alt={animal.name}></img>
    </section>
  );
};

export default Animal;
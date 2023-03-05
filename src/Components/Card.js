import './Main.css';

const Template = ({ title, image, content, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
}; 

export function Card () {
  return(
    <section className='Week_specials'>
        <article>
      <Template 
        title="Greek Salad" 
        image={require("../Assets/greekSalad.jpg")} 
        content="The Famous greek salad of crispy lettuce, peppers, olives and our chicago style tota chesse, garnished with crunchy garlica and rosemary croutons." 
        buttonText="Order a delivery"
      /> </article>
      <article>

      <Template 
        title="Bruschetta" 
        image={require("../Assets/Bruschetta.jpg")}
        content="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." 
        buttonText="Order a delivery"
      /> </article>
      <article>

      <Template 
        title="Lemon Dessert" 
        image={require("../Assets/lemon_dessert.jpg")}
        content="This come straight from grandma's recipe book, every last ingredient has been sourced ans is an authentic as can be imagined." 
        buttonText="Order a delivery"
      /> </article>
    </section>  
                   
  )
};

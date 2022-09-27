import CardsContainerBlock from "../CardsContainer/cardsContainer";
import './expertise.css';

export default function ExpertiseBlock(){
    return(
        <section id="expertise">
            <div className="description">
                <h2>Special Expertise from Us</h2>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    augue et pharetra dolor pharetra, convallis turpis euismod
                    ultrices. Netus nisl pretium sapien egestas vestibulum
                    felis. Nisi orci.
                </p>
            </div>
            <CardsContainerBlock></CardsContainerBlock>
        </section>
    );
}
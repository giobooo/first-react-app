import CardBlock from "../Card/card";
import cardsList from'./cardsSource.json';

export default function CardsContainerBlock(){
    
    return(
        <div className="cards">
           {cardsList.map((card) =>(
            <CardBlock key={card.title} uriImage={card.uri} altImage={card.alt} title={card.title} paragraph={card.p}></CardBlock>
           ))}
        </div>
    );
}
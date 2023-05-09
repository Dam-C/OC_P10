import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    // le brief indique que les events ne s'affichent pas du plus ancien au plus récent, mais c'est pourtant le cas, rien à corriger ici
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  //fonction ajoutée pour modifier la case indiquant sur quelle image on se situe
  const handleRadioChange = (e) => {
    const newIndex = 0;
    setIndex(newIndex);
  };

  const nextCard = () => {
    setTimeout(() => {
      // ajout d'une condition de vérification de la valeur de "byDateDesc" pour savoir si elle est bien définie
      if (byDateDesc && byDateDesc.length > 0) {
        //Correction de byDateDesc.length avec le -1 pour correspondre à la base 0 de comptage.
        setIndex(index < byDateDesc.length - 1 ? index + 1 : 0);
      }
    }, 5000);
  };

  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // Key passee sur un Reacct Fragment pour permettre de ne pas générer de warning
        <React.Fragment key={idx}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <div>
                  {
                    // modification de la fonction getMonth pour afficher le bon mois
                    getMonth(new Date(event.date))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={radioIdx}
                  type="radio"
                  name="radio-button"
                  checked={
                    //idx remplacé par index
                    index === radioIdx
                  }
                  onChange={handleRadioChange}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;

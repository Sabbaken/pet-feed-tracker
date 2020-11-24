import React from 'react';
import SlideToggle from 'react-slide-toggle';

const Article = ({ article }) => {
  const { text, photo, title } = article;
  return (
    <SlideToggle
      collapsed
      render={({ toggle, toggleState, setCollapsibleElement }) => (
        <div className="article">
          <img className="article__image clickable" onClick={toggle} src={photo} alt="" />

          <div className="article__top clickable" onClick={toggle}>
            <div className="article__title">
              <span className="text text-header">
                {title}
              </span>
            </div>

            <img src="./images/icons/chevron-down.svg"
                 alt="arrow"
                 className={toggleState === "EXPANDED" || toggleState === "EXPANDING" ? "article__toggle pet-card__toggle pet-card__toggle--opened" : "article__toggle pet-card__toggle"} />
          </div>
          <div className="article__bottom" ref={setCollapsibleElement}>
            <span className="text text-primary">
              {text}
            </span>
          </div>
        </div>
      )}
    />
  );
};

export default Article;

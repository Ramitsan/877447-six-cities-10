import React, { ChangeEvent } from 'react';

function Input ({value, id, onChange, initialValue} : {value: number, id: string, onChange: (value: number) => void, initialValue: number } ) : JSX.Element {
  return (
    <>
      <input onChange={(e) => {
        if(e.target.checked) {
          onChange(value);
        }
      }}
      className="form__rating-input visually-hidden" name="rating" value="" id={id} type="radio" checked={value === initialValue}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function StarInput({onChange, initialValue}: {onChange: (value: number) => void, initialValue: number }): JSX.Element {
  const starsValues = [5, 4, 3, 2, 1];
  const stars = starsValues.map((value) => {
    const id = `${value}-stars`;
    return (
      <Input key={`input${value}`} id={id} value={value} initialValue={initialValue} onChange={onChange}/>
    );
  });
  return (
    <div className="reviews__rating-form form__rating">
      {stars}
    </div>
  );
}

export default function ReviewForm(): JSX.Element {
  const [formData, setFormData] = React.useState({
    rating: 0,
    review: '',
  });

  // Функция для обновления состояния
  const handleStarChange = (value: number) => {
    setFormData((last) => ({ ...last, rating: value }));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((last) => ({ ...last, review: evt.target.value }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarInput onChange={handleStarChange} initialValue={formData.rating}/>
      {(() => '') ()}

      <textarea onChange={handleReviewChange} className="reviews__textarea form__textarea" id="review" name="review" value={formData.review} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

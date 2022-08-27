import React, { ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../store';

type InputProps = {
  inputValue: number;
  onChange: (value: number) => void;
  activeValue: number;
}

function Input({ inputValue, onChange, activeValue }: InputProps): JSX.Element {
  const id = `${inputValue}-stars`;
  return (
    <>
      <input onChange={(e) => {
        if (e.target.checked) {
          onChange(inputValue);
        }
      }}
      className="form__rating-input visually-hidden" name="rating" value="" id={id} type="radio" checked={inputValue === activeValue}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type StarInputProps = {
  onChange: (value: number) => void;
  initialValue: number;
}

function StarInput({ onChange, initialValue }: StarInputProps): JSX.Element {
  const starsValues = [5, 4, 3, 2, 1];
  const stars = starsValues.map((value) => (
    <Input key={`input${value}`} inputValue={value} activeValue={initialValue} onChange={onChange} />
  ));
  return (
    <div className="reviews__rating-form form__rating">
      {stars}
    </div>
  );
}

export default function ReviewForm({onComment} : {onComment: (comment: {comment: string, rating: number}) => void}): JSX.Element {
  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    rating: 0,
    comment: '',
  });

  // Функция для обновления состояния
  const handleStarChange = (value: number) => {
    setFormData((last) => ({ ...last, rating: value }));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((last) => ({ ...last, comment: evt.target.value }));
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onComment(formData);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarInput onChange={handleStarChange} initialValue={formData.rating} />
      {(() => '')()}

      <textarea onChange={handleReviewChange} className="reviews__textarea form__textarea" id="review" name="review" value={formData.comment} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

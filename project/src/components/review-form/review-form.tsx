import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../store';
import { CommentType } from '../../types/commentType';
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../const';

type InputProps = {
  inputValue: number;
  onChange: (value: number) => void;
  activeValue: number;
}

// одна звезда из звездного рейтинга
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

// весь звездный рейтинг
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

//вся форма отзыва
export default function ReviewForm({ onComment }: { onComment: (response: CommentType[]) => void }): JSX.Element {
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

  const [lock, setLock] = useState(false);

  const isValidCommentLength = formData.comment.length <= MIN_COMMENT_LENGTH || formData.comment.length >= MAX_COMMENT_LENGTH;
  const invalid = useMemo(() => (isValidCommentLength) || (formData.rating === 0), [formData.rating, isValidCommentLength]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (lock) { return; }
    setLock(true);

    api.post<CommentType[]>(`/comments/${id}`, formData).then((response) => {
      setFormData({ comment: '', rating: 0 });
      setLock(false);
      onComment(response.data);
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarInput onChange={handleStarChange} initialValue={formData.rating} />
      {(() => '')()}

      <textarea
        onChange={handleReviewChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formData.comment}
        maxLength = {MAX_COMMENT_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={lock}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} and no more than {MAX_COMMENT_LENGTH}  characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={lock || invalid}>Submit</button>
      </div>
    </form>
  );
}

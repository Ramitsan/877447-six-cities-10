import { useRef, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearErrorAction, loginAction } from '../../store/api-actions';
import { AuthDataType } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { setError } from '../../store/error/error-process';

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthDataType) => {
    dispatch(loginAction(authData));
  };

  const validatePassword = (password: HTMLInputElement) => {
    const regNumber = /[0-9]{1,}/;
    const regLetter = /[A-Za-z]{1,}/;
    return !!(password.value.match(regNumber) && password.value.match(regLetter));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null && validatePassword(passwordRef.current)) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      dispatch(setError('Password must contain 1 letter and 1 number'));
      dispatch(clearErrorAction());
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

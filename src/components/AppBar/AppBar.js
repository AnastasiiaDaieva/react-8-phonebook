import s from 'components/AppBar/AppBar.module.scss';
import AuthNav from './AuthNav/AuthNav';
import GenNav from './GenNav/GenNav';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLoggedIn, getUserEmail } from 'store/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);

  const userEmail = useSelector(getUserEmail);
  return (
    <header className={s.AppBar}>
      <GenNav className={s.AppBar__item} />
      {isLoggedIn ? (
        <UserMenu className={s.AppBar__item} email={userEmail} />
      ) : (
        <AuthNav className={s.AppBar__item} />
      )}
    </header>
  );
}

export default AppBar;

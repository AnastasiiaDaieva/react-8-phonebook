import s from 'components/AppBar/UserMenu/UserMenu.module.scss';
import { logOut } from 'store/auth/auth-operations';
import { useDispatch } from 'react-redux';

function UserMenu({ className, email }) {
  const dispatch = useDispatch();
  return (
    <div className={className}>
      <span className={s.UserMenu__user}> Hello, {email}</span>
      <img alt="" src="avatar" />
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;

import { Link } from 'react-router-dom';
import { Button, Variant } from '../common/Button';
import { FacebookBtn } from '../common/FacebookBtn';
import { GoogleBtn } from '../common/GoogleBtn';

export const LoginScreen = () => {
  return (
    <div>
      <Link to="course">
        <Button onClick={() => {}} text='Cerrar' variant={Variant.SECONDARY} />
      </Link>
    </div>
  )
}
import { useAuthenticationContext } from '../contexts';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';

export const App = () => {
   const context = useAuthenticationContext();

   return (
      <>{context?.isAuthenticated ? <Authenticated /> : <Unauthenticated />}</>
   );
};

export default App;

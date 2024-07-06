// components/withSubscription.js
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { checkUserPlan } from '../../../store/reducers/Authreducer';

const withSubscription = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { hasPlan, status } = useSelector((state) => state.auth);

    useEffect(() => {
      if (status === 'idle') {
        dispatch(checkUserPlan());
      }
    }, [dispatch, status]);

    useEffect(() => {
      if (status === 'succeeded' && !hasPlan) {
        // router.push('/');
      }
    }, [hasPlan, router, status]);

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    return hasPlan ? <WrappedComponent {...props} /> : <p>You need to purchase a plan to access this content.</p>;
  };
};

export default withSubscription;

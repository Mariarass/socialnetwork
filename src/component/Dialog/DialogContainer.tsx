import React from 'react';
import {Dialog} from './Dialog';
import {withRedirect} from "../../HOC/withAuthRedirect";

const DialogContainer = () => {

     /*   const withRedirect = (WrappedComponent: any) => {
            const ComponentWithRedirect = () => {
                const isAuth = useSelector(isAuthSelector)
                const navigate = useNavigate()
                useEffect(() => {
                    if (!isAuth) {
                        navigate('/login')
                    }
                })

                return WrappedComponent
            }

            return ComponentWithRedirect
        }*/
        const DialogWidthRedirect = withRedirect(<Dialog/>);

        return (
            <div>
                <DialogWidthRedirect/>


            </div>
        );
    }
;

export default DialogContainer;
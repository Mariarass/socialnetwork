import React from 'react';
import {Dialog} from './Dialog';
import {withRedirect} from "../../HOC/withAuthRedirect";

const DialogContainer = () => {


        const DialogWidthRedirect = withRedirect(<Dialog/>);

        return (
            <div>
                <DialogWidthRedirect/>

            </div>
        );
    }
;

export default DialogContainer;
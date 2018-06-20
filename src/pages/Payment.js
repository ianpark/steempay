import React from 'react';

import PaymentInject from 'components/PaymentInject'
import PaymentViewContainer from 'containers/PaymentViewContainer'
import './PageCommon.css'

const Payment = ({match}) => {
    return (
        <div className="pageArea">
            <h2>PAYMENT DETAIL</h2>
            {match.params.id ? <PaymentViewContainer invoiceId={match.params.id} /> : <PaymentInject />}
        </div>
    );
};

export default Payment;
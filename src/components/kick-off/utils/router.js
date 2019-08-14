import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Routing from '../DeliveryContact/DeliveryContact';
import App from '../SalesContact/SalesContact';
import AddSow from '../AddSow/AddSow';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/salescontact' component={App} />
                <Route path='/deliverycontact' component={Routing} />
                <Route path='/addsow' component={AddSow} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
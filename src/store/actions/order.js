import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };

};

export const purchaseBurgerFail = (error) => {
    return  {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error

    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
         axios.post('/order.json',orderData)
        .then(response => {
            console.log(response.data)
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));

        })
        .catch(error => {
           dispatch(purchaseBurgerFail(error));
        });


    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
}
};

export const fetchordersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/order.json')
        .then(res => {
            const fetchedOrders = [];
            console.log(res.data);
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id:key

                });
                    
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
            
        })
        .catch(err => {
            dispatch(fetchordersFail(err));

        })
    }
}

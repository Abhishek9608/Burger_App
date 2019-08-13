import React, {Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {
    state = {
        orders: [],
        loading:true
    }
    componentDidMount() {
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
            console.log(fetchedOrders);
            this.setState({loading:false, orders: fetchedOrders});
            console.log(this.state.orders);
            
        })
        .catch(err => {
            this.setState({loading:false});

        })
        
    }
    render() {
        return(
            <div>
             {
                 this.state.orders.map(order => (
                     <Order 
                     key={order.id}
                     ingredients={order.ingredients}
                     price={+order.price}/>
                 ))
             }

            </div>

            
        );
    }

}

export default withErrorHandler(Orders, axios);
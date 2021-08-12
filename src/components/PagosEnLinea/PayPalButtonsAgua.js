import axios from 'axios';
import React from 'react'
import { urls } from '../../apiConection/Links';


class PayPalButtonsAgua extends React.Component{
    
    state = {
        paypal : React.createRef()
   }

    async PostPayment(){
        var form = new FormData();
        let fecha = new Date()
        form.append("date", fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate())
        form.append("name",this.props.data.name);
        form.append("toma",this.props.data.toma);
        form.append("address",this.props.data.address);
        form.append("email",this.props.data.email);
        form.append("zona",this.props.data.zona);
        form.append("amount",this.props.data.amount);
        form.append("METHOD","POST");
        await axios.post(urls.pagosCapasu,form,{headers:{'content-type':'multipart/form-data'}})
        .then(response =>{
            alert("pago realizado a la toma no. " + response.data.toma +
                " a nombre " + response.data.name + " Pago total: $" + response.data.amount);
            
        }).catch(error=>{
            console.log(error);
          })
}
    componentDidMount(){
        window.paypal.Buttons({
            style: {
                layout: 'vertical',
                color:  'blue',
                shape:  'pill',
                label:  'paypal'
              },
            createOrder:(data,actions,err) =>{
                return actions.order.create({
                    intent : "CAPTURE",
                    purchase_units:[
                        {
                            description:"Pago de agua",
                            amount : {
                                currency_code:"MXN",
                                value: 1.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data,actions)=>{
                const order = await actions.order.capture()
                console.log(order)
                this.PostPayment()
                
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(this.state.paypal.current)
    }
    render(){
        return (

            <div className = "text-center" ref= {this.state.paypal}>

            </div>
    )
    }
    
}

export default PayPalButtonsAgua
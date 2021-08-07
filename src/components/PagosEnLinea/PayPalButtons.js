import axios from 'axios';
import React,{useRef,useEffect} from 'react'
import { urls } from '../../apiConection/Links';


const PayPalButtons = (props) =>{
    const PostPayment = async() =>{
        var form = new FormData();
        let fecha = new Date()
        form.append("date", fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate())
        form.append("name",props.data.name);
        form.append("toma",props.data.toma);
        form.append("address",props.data.address);
        form.append("email",props.data.email);
        form.append("zona",props.data.zona);
        form.append("amount",props.data.amount);
        form.append("METHOD","POST");
        await axios.post(urls.pagosCapasu,form,{headers:{'content-type':'multipart/form-data'}})
        .then(response =>{
            alert("pago realizado a la toma no. " + response.data.toma +
                " a nombre " + response.data.name + " Pago total: $" + response.data.amount);
            
        }).catch(error=>{
            console.log(error);
          })
}
    const paypal = useRef()
    useEffect (()=>{
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
                PostPayment()
                
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    })
    return (

                <div className = "text-center" ref= {paypal}>

                </div>
        
        )
}

export default PayPalButtons
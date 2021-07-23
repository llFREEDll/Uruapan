import React,{useRef,useEffect} from 'react'
const PayPalButtons = () =>{
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
                console.log("Orden Exitosa" + order)
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    return (

                <div className = "text-center" ref= {paypal}>

                </div>
        
        )
}

export default PayPalButtons
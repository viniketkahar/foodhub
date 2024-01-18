import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {

    // const foodItem = props.foodItems;  reduced propdrilling can be performed due to context
    let navigate = useNavigate();
    const priceRef = useRef();
    let data = useCart();
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOption = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddtoCart = async () => {
        if (!localStorage.getItem("authToken")) {
            navigate("/login")
            return;
        }
        let food = []
        for (const item of data) {
            if (item.id === props.foodItems._id) {
                food = item
                break;
            }
        }

        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: qty })
                return;
            }

            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: qty, size: size })
                return;
            }
            return;
        }
        await dispatch({ type: "ADD", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: qty, size: size })
        console.log(data);
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    })

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src={props.foodItems.img} alt="card image" style={{ height: "160px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItems.name}</h5>    {/* props.foodItems.name can be written as foodItem.name imported above */}
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })
                                }
                            </select>

                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOption.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })}
                            </select>

                            <div className='d-inline h-100 fs-5'>₹{finalPrice}/-</div>
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

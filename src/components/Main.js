import { addToCart, emptyCart, removeToCart, add_q } from '../redux/action';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
function Main() {
  let navigate = useNavigate()
  const [listOfOrders, setListOfOrders] = useState([]);
  const [listOfProd, setListOfProd] = useState([]);
  const [email, setemail] = useState("");
  const [product_id, setproductid] = useState(0);
  
  const createorder = () => {
    const mail = global.email
    console.log(email)
    console.log(product_id)
    axios.post("http://localhost:5001/api/auth/addp", {
      email,
      product_id,
    }).then((response) => {
      setListOfOrders([
        ...listOfOrders,
        {
          email,
          product_id,
        },
      ]);
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5001/api/auth/prod`).then((response) => {
      setListOfProd(response.data);
    });
  }, []);

  const dispatch = useDispatch();
  // let data = useSelector((state)=>state.productData);  
  // useEffect(()=>{
  //   dispatch(productList())
  // },[])

  let data1 = useSelector((state)=>state.prodata);  
  console.log(data1);

  function addp1(name) {
    return () => {
      setemail(global.email);
      setproductid(name);
    }
  }
  
  return (
    <div>
      <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' ></form>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          listOfProd.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              {/* <button onClick={() => dispatch(addToCart(item)),} >Add to Cart</button> */}
              <button onClick={() => dispatch(add_q(item))}>addddd</button>
              <button onClick={addp1(item.id)}>add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
              </div>
          </div>)
        }
      </div>
      <button onClick={createorder}>submit</button>
      <Link to="/products" className="m-3 mx-1 btn btn-danger">cart</Link>
    </div>
  );
}

export default Main;

import { useState } from "react"
import { addCustomer as addCustomerReduxAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";
const CustomerAdd = () => {
    const  dispatch = useDispatch();
    const [customerName, setCustomerName] = useState("");

    const addNewCustomer = () => {
        dispatch(addCustomerReduxAction(customerName));
        setCustomerName("")
    }
    return (
        <>
            <h1>Add Customer</h1>
            <input value={customerName} type="text" onChange={(e) => { setCustomerName(e.target.value) }}></input>
            <button onClick={addNewCustomer}>Add Customer</button>
        </>
    );
}
export default CustomerAdd;
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer as deleteCustomerReduxAction } from "./slices/customerSlice";

const CustomerView = () => {
    const customerArray = useSelector((state) => state.customersA)
    const dispatch = useDispatch();
    const deleteHandler = (index) => {
        dispatch(deleteCustomerReduxAction(index))
        alert("Deleted !")
    }
    return (
        <ul>
            {
                customerArray.map((customer, index) => {
                    return (
                        <li style={{ "margin": "30px" }}>
                            {customer + "    "}
                            <button onClick={() => { deleteHandler(index) }}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    );
}
export default CustomerView
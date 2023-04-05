import { useParams } from "react-router-dom"

export default function PaymentClient() {

    const {id} = useParams();

    return (
        <h1>pagamento client {id}</h1>
    )

}
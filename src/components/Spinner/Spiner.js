
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Spiner.css'
const Spiner = () => {
    return (
        <>
        <div className='container-fluid' id="spiner">
            <Spinner color='danger' />
        </div>
        </>
    )
}

export default Spiner
import {useContext} from 'react'
import Questions from './Questions'
import {Form,Button} from 'react-bootstrap';
import {ContextProvider} from './ContextProvider';
import AddQuestions from './AddQuestions';

function Choices() {
   
const {dispatch} = useContext(ContextProvider);

const AddQuestions = value => () => 
    {
         dispatch({type:'question', value});
    }


    return (
        <div className="container">
         <h1 style={{background:"lightblue", textAlign:"center"}}>Quiz App</h1>
        <div className="container my-4 w-50 border border-dark" style={{background:"lightblue"}}>
        <Form>
            <Form.Group controlId="choice" >
                <Form.Label><h1>Choice</h1></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Add Choice..." style={{background:"white"}}/>
            </Form.Group>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Correct Option</label>
            </div>

            <div className="my-3 d-flex justify-content-end">
                <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                <Button className="btn-pramary mx-2 " onClick={AddQuestions(1)}>Add Choice</Button>
            </div>
        </Form>

    </div>
    </div>
    )
}

export default Choices

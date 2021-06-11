import {useContext} from 'react'
import Questions from './Questions'
import {Form,Button} from 'react-bootstrap';
import {ContextProvider} from './ContextProvider';
import Choices from './Choices';
import MainPage from './MainPage';
function AddQuestions() {
    const {dispatch} = useContext(ContextProvider);

const choices = value => () => 
    {
         dispatch({type:'choice', value});
    }
const Mainpage = value => () => 
    {
         dispatch({type:'mainpage', value});
    }
    return (
        <div>
        <h1 style={{background:"lightblue", textAlign:"center"}}>Quiz App</h1>
        <div className="container my-4 w-50 border border-dark" style={{background:"lightblue"}}>
                  <Form>
                      <Form.Group controlId="question">
                          <Form.Label><h1>Question</h1></Form.Label>
                          <Form.Control as="textarea" rows={3}  placeholder="Add Question..." />
                      </Form.Group>
  
                      <div className="row">
                          <div className="col">
  
                              <Form.Label>Type</Form.Label>
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault1" value="Single Choice"  />
                                  <label className="form-check-label" for="flexRadioDefault1">Single Choice</label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault2" value="Multiple Choice"  />
                                  <label className="form-check-label" for="flexRadioDefault2">Multiple Choice</label>
                              </div>
                          </div>
                          <div className="col">
                              <Form.Group controlId="points">
                                  <Form.Label>Points</Form.Label>
                                  <Form.Control type="text" />
                              </Form.Group>
                          </div>
                      </div>
  
                      <h3 className='text-center'>Choices</h3>
                      <div className="container my-4 h-50 w-80  border border-dark" style={{background:"white"}}>
                          
                          <div className="d-flex justify-content-end my-2">
                              <Button className='btn-primary' onClick={choices(2)} >Add Choice</Button>
                          </div>
                      </div>
                      <div className="my-3 d-flex justify-content-end">
                          <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                          <Button className="btn-pramary mx-2 " onClick={Mainpage(0)}>Create</Button>
                      </div>
                  </Form>
  
              </div>
        </div>
    )
}

export default AddQuestions

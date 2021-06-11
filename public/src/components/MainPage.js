import {useContext} from 'react'
import Questions from './Questions'
import {Form,Button} from 'react-bootstrap';
import {ContextProvider,QuizStateProvider} from './ContextProvider';
import AddQuestions from './AddQuestions';
export default function MainPage() {

const {dispatch} = useContext(ContextProvider);
const {QuizState,dispatchs} = useContext(QuizStateProvider);

const AddQuestions = value => () => 
    {
         dispatch({type:'question', value});
    }
 

    function titlechange(valu){
      var val=valu.target.value;
      console.log(val);
       dispatchs({type:'title', val});
    }
    function pointschange(value){
      var val=value.target.value;
       dispatchs({type:'points', val});
    }
    function timechange(valu){
      var val=valu.target.value;
      console.log(val);
       dispatchs({type:'time', val});
    }
    function datechange(valu){
      var val=valu.target.value;
      console.log(val);
       dispatchs({type:'deadline', val});
    }

    return (
      <div className="container">
      <h1 style={{background:"lightblue", textAlign:"center"}}>Quiz App</h1>
      <div className="container my-4 w-50 border border-dark " style={{background:"lightblue"}}>
      <h1 className='text-center'>Create Quiz</h1>
      <Form>
          <Form.Group controlId="quizTitle">
              <Form.Label>Quiz Title</Form.Label>
              <Form.Control type="text" onChange={titlechange}/>
          </Form.Group>
          <Form.Group controlId="points">
              <Form.Label>Total Points</Form.Label>
              <Form.Control type="text" onChange={pointschange}/>
          </Form.Group>
          <div className="row">
              <div className="col">
                  <Form.Group controlId="timeAllowed">
                      <Form.Label>Time Allowed</Form.Label>
                      <Form.Control type="text" onChange={timechange}/>
                  </Form.Group>
              </div>
              <div className="col">
                  <Form.Group controlId="points">
                      <Form.Label>Deadline</Form.Label>
                      <Form.Control type="date" onChange={datechange}/>
                  </Form.Group>
              </div>
          </div>

          <h3 className='text-center'>Questions</h3>
          <div className="container my-4 h-50 w-80  border border-dark " style={{background:"white"}}>
          <div className="my-4 d-flex justify-content-center">
                <Button className='btn-primary' onClick={AddQuestions(1)}>Add Question</Button>
              </div>
          </div>
          <div className="my-3 d-flex justify-content-end">
              <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
              <Button className="btn-pramary mx-2">Create Quiz</Button>
          </div>
      </Form>

  </div>
      
      </div>
    )
}

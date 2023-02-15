import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  let color;
  if (count < 5) {
    color = 'green';
  } else if (count < 10) {
    color = 'blue';
  } else {
    color = 'red';
  }
 

  
 
  return (
    <div className="App">
      <Container>
        
      <div >
   
      </div>
     

      <Segment compact padded="very" raised
      style={{
        margin: "220px auto",
        marginBottom: "150px auto"
        
      }}>
      <Grid columns= {0}  style={{height: "150px",width: "270px"}} >

        <GridRow centered>
          <GridColumn>
            <h1 align = "center" style={{color}}>Counter</h1>
            <h2 align = "center">{count}</h2>
            <Button color='green'  onClick={handleIncrement}  >Increment</Button>
            <Button  color='red' onClick={handleDecrement}>Decrement</Button>
          </GridColumn>
         
          </GridRow>
          
      </Grid>
      </Segment>
      </Container>
   
    </div>


  );
}

export default App;

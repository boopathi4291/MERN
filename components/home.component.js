import React ,{component} from 'react';
import { Link} from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
           <div>
              <h2>Welcome to Student details App</h2>
              <p>Click the link to see Student Details <Link to='/students'>click here</Link></p>
           </div>
        );
     }

}

export default Home;
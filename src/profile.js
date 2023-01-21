import Card from 'react-bootstrap/Card';
import './profile.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body>
		 <div>
		 Want to Know More About Me. check out my profiles here
		 
		 <a href="https://github.com/ashwanijha8068"><GitHubIcon className="ghub" /></a>
		
	    <a href=""><LinkedInIcon className="l_icon" /></a>
	 
	    
		 
         </div>
		
	 
		 
	  </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
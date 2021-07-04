import "./intro.css";
import { Grid,Cell } from 'react-mdl';
import FooterLink from '../footerlink/FooterLink';
import Head from '../head/Head';

export default function Intro(){
    return(
      <div className="section-container">
        <div style={{width: '100%',margin: 'auto' }}>  
        <Head
                heading='About Me.'
                details=''
            />
        <Grid className="landing-grid">
        <Cell col={12}>
           <span> <img
                src="https://www.knoxschools.org/cms/lib/TN01917079/Centricity/Domain/3614/Ashleybitmoji.png"
                alt="avatar"
                className="avatar-img"
                /></span>
            <div className="banner-text">
            <h2>An avid Learner</h2>
            <hr/>
            <p>Ahoy!! I am Mann Bajpai, a student pursuing her B.Tech in the field of Computer Science. I hail from New Delhi, India. 
            Reading books while listening to music is my second favourite way of passing time after reading and going to the park for a run. 
            My fascination with trivial things motivates me to experiment and learn about a spectrum of topics from divergent fields.</p>
            </div>
            <div className="social-links">

          {/* LinkedIn */}
          <a href="www.linkedin.com/in/mann-bajpai-0986211a0" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/MB2407" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
        </Cell>
        </Grid>

        <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/Portfolio'
            />
        </div>
     </div> 
    )
}
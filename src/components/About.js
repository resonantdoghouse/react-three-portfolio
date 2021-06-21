import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeBranch,
  faGlobe,
  faStrikethrough,
} from '@fortawesome/free-solid-svg-icons';

const style = {
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 9999,
  background: `rgba(255,255,255,0.8)`,
  padding: '0.625rem',
};

function About() {
  return (
    <div style={{ ...style }}>
      <h1>
        Hello World <FontAwesomeIcon icon={faGlobe} />
      </h1>
      <p>
        Welcome to my{' '}
        <span style={{ textDecoration: 'line-through' }}>simple</span> portfolio{' '}
      </p>
      <a href="https://github.com/resonantdoghouse">
        github <FontAwesomeIcon icon={faCodeBranch} />
      </a>
    </div>
  );
}

export default About;

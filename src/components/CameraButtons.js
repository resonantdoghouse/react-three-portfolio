import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import state from '../state';
import { playSong } from '../music';

const style = {
  zIndex: 1,
  position: 'absolute',
  bottom: '30vh',
  // left: '40vw',
  height: '30px',
  width: '30px',
  background: 'none',
  color: 'white',
  border: 'none',
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  opacity: 0.9,
  cursor: 'pointer',
};

const CameraButtons = () => {
  const sets = {
    // model_3
    1: {
      cameraPos: [1, 0, Math.PI * 2],
      target: [1, 2, Math.PI * 0.25],
      name: 'obj_1',
    },
    // model_s
    2: {
      cameraPos: [0, 0, Math.PI * 2],
      target: [0, 0, 0],
      name: 'obj_2',
    },
  };

  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
    playSong();
  };
  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          ...style,
          left: '5vw',
        }}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          ...style,
          right: '5vw',
        }}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </>
  );
};

export default CameraButtons;

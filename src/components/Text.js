import { FontLoader } from 'three';
import StarJediFont from '../assets/fonts/Star_Jedi_Regular.json';
// import helvetiker from '../assets/fonts/helvetiker_regular.typeface.json';

function Text(props) {
  console.log(props);
  console.dir(Text);
  const font = new FontLoader().parse(StarJediFont);

  // configure font geometry
  const textOptions = {
    font,
    size: 0.5,
    height: 1,
    align: 'center',
  };

  return (
    <mesh {...props}>
      <textGeometry attach="geometry" args={[props.text, textOptions]} />
      <meshNormalMaterial attach="material" transparent />
    </mesh>
  );
}

export default Text;

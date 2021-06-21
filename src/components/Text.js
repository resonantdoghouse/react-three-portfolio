import { FontLoader } from 'three';
import StarJediFont from '../assets/fonts/Star_Jedi_Regular.json';

function Text(props) {
  console.log(props);
  console.dir(Text);
  const font = new FontLoader().parse(StarJediFont);

  // configure font geometry
  const textOptions = {
    font,
    size: 1,
    height: 1,
    align: 'center',
  };

  return (
    <mesh {...props}>
      <textGeometry attach="geometry" args={[props.text, textOptions]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

export default Text;

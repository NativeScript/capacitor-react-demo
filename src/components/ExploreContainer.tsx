import './ExploreContainer.css';
import { native } from '@nativescript/capacitor';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    native.openNativeModalView();
  }
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <p className="ion-padding-top">
        <a onClick={handleClick}>Open Native Modal</a>
      </p>
    </div>
  );
};

export default ExploreContainer;

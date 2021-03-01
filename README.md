A simple React Ionic demo with @nativescript/capacitor example wired.

## How this demo was created

```
npm install -g @ionic/cli
ionic start
> React
> sidedrawer

npm install @capacitor/cli@next @capacitor/core@next @capacitor/android@next @capacitor/ios@next

npx cap init

// this creates the build directory in order to add platforms
npm run build 

npx cap add android
npx cap add ios

// Now ready for NativeScript 
npm i @nativescript/capacitor --save

// add bindings/wirings in any component, ie: ExploreContainer.tsx:
```
import './ExploreContainer.css';
import { native } from '@nativescript/capacitor';

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    native.openNativeModalView();
  }
  return (
    <div className="container">
      <strong>{name}</strong>
      <p className="ion-padding-top">
        <a onClick={handleClick}>Open Native Modal</a>
      </p>
    </div>
  );
};

export default ExploreContainer;
```

// build for mobile (builds react and nativescript together)
npm run build:mobile

// Now sync
npx cap sync

// Now just run the app:
npx cap run ios
```
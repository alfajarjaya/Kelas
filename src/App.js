import React, {Suspense} from "react";
import NavbarComp from "./components/NavbarComp";
import HeroComp from './components/HeroComp';
import FooterComp from './components/FooterComp';
const GalleryComp = React.lazy(() => import('./components/GalleryComp'));

function App() {
  return (
    <div>
      <HeroComp />

      <NavbarComp />

      <Suspense fallback={<div>Loading...</div>}>
        <GalleryComp />
      </Suspense>

      <FooterComp />
    </div>
  )
}

export default App;
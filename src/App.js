import React, {Suspense} from "react";
import NavbarComp from "./components/NavbarComp";
import HeroComp from './components/HeroComp';
import BlogComp from './components/BlogComp';
import FooterComp from './components/FooterComp';
import TextAnonim from "./components/TextAnonim";
const GalleryComp = React.lazy(() => import('./components/GalleryComp'));

function App() {
  return (
    <div>
      <HeroComp />

      <NavbarComp />

      <Suspense fallback={<div>Loading...</div>}>
        <GalleryComp />
      </Suspense>


      <BlogComp />

      <TextAnonim />

      <FooterComp />
    </div>
  )
}

export default App;
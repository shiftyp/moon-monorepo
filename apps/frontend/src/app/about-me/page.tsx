import AboutMe from './about-me.mdx'
import { HelloServerComponent } from './hello.server';


export default function Home() {
  return (
    <>
      <HelloServerComponent />
      <AboutMe />
    </>
  );
}

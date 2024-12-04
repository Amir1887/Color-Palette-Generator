import logo from './logo.svg';
import './App.css';
import ColorInput from './components/ColorInput';

function App() {
  return (
   <main className='mx-auto max-w-5xl lg:max-w-7xl px-6 py-12'>
    <h1 className='text-4xl font-medium  text-center'>
    GHW Open Source Week - Color Palette Generator
    </h1>
    <section className='p-1 border-2 rounded-xl mt-10 '>
      <ColorInput/>
    </section>
   </main>
  );
}

export default App;

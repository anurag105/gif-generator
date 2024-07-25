import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-black  items-center">
      <h1 className=' bg-white rounded-md w-11/12 text-center mt-[40px]
      px-10 py-2 text-3xl font-bold  '>Random Gifs</h1>
      <div className='flex flex-col  bg-black w-full items-center gap-y-5 mt-[15px]'>
        <Random/>
        <Tag/>
      </div> 
    </div>
  );
}

export default App;

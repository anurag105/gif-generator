
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState('football');

   //jo code useGif.js me hai usko yaha pe need nahi hai
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);  // Set loading to true
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //         const response = await axios.get(url);
    //         setGif(response.data.data.images.downsized_large.url);  // Set the GIF URL
    //         setLoading(false);  // Set loading to false
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const{gif,loading,fetchData}=useGif(tag);

    function clickHandler() {
        fetchData(tag);
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return (
        <div className='w-2/5 rounded-lg border-gray-300 border-solid bg-white flex flex-col items-center gap-y-2'>
            <h1 className=' mt-2 mb-2 text-lg underline uppercase font-bold'>Random {tag} Gif</h1>

            {
                loading ? (<Spinner/>) :( <img src={gif} alt="Random Gif" width='350' />)
            }
           <input type="text" className='w-5/6 bg-gray-200 text-lg py-1.5 rounded-lg  text-center mb-1' placeholder='Search'
             onChange={changeHandler} value={tag}
           />
            <button className='w-5/6 bg-gray-500 text-lg py-1.5 rounded-lg mb-1'
             onClick={clickHandler}>
                Generate
            </button>
        </div>
    );
};

export default Tag;

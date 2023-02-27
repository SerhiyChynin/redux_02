import { useDispatch } from 'react-redux';
import { addGoods } from '../action';

const Goods = () => {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addGoods(data.id.value, data.title.value, data.image.value))
    }
return (
    <div>
        <form onSubmit={formHandler}>
            <div>
                <input type="text" name='id' defaultValue = 'jk2h35' />
            </div>
            <div>
                <input type="text" name='title' defaultValue = 'Акустическая система Apple HomePod mini Blue' />
            </div>
            <div>
                <input type="text" name='image' defaultValue = 'https://content1.rozetka.com.ua/goods/images/preview/229714018.jpg' />
            </div>    
            <div>
                <button type='submit' >Add new goods</button>
            </div>
    </form>
    </div>
)}

export default Goods;
interface ItemData{
    "id": number,
    "name": string,
    "price": number,
    "imgUrl": string,

}
const Items = (item:ItemData) => {
const {id,name,price,imgUrl} = item;




    return (
        <div>
            
        </div>
    );
};

export default Items;
function Clothes({password}){
    return(
    <div className="products">
    {password.map((element=>{
        const {id, name, price, image}= element;
        return(<div className="productCard" key={id}>  
            <img src={image} alt="foto" width="400px" height="500px"/>
            <h3>{name}</h3>           
            <h4>$ {price}</h4>
    </div>

    )
    }
))}
   </div>  
    )
}

export default Clothes;
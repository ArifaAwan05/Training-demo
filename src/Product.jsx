import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
    let oldPrice = ["1200", "1300","1800", "1500"]
    let newPrice = ["2000", "4000","5000", "9000"];
    let Desc = [
       [" 8000 DPI", "5Prograaming Language"] ,
       ["Intutive Service","Design for iPad"] ,
        ["Wirless", "design for AirBnB"],
       ["Apple IOS", "designed for iPad pro"]
    ]
    return(
    <div className="Product">
        
        <h4>{title}</h4>
        <p>{Desc[idx][0]}</p>
        <p>{Desc[idx][1]}</p>
        
        <Price oldPrice ={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>);
}
export default Product;
// function Product({title,Price}){
//     // if (!Array.isArray(features)) {
//     //     console.error('Expected features to be an array, but got:', features);
//     //     return null; // or some fallback UI
//     //   }
//     //   const list = features.map((el) => <li key={el}>{el}</li>);
//     if(Price>=3000 ){
//         return(
//         <div className="Product">
//             <h3>{title}</h3>
//             <p>this is my product description</p>
//             {/* <p>{list}</p> */}
//             <p>{Price}</p>
//             <p>Discount: 5%</p>
//         </div>
//         )
//         } else{
//             return(
//                 <div className="Product">
//                     <h3>{title}</h3>
//                     <p>this is my product description</p>
//                     <p>{Price}</p>
//                 </div>
//                 )

//         }
   
// }
// export default Product;

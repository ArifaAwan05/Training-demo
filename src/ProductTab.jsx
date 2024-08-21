import Product from "./Product";
function ProductTab(){
    let styles ={
        display:"flex",
        flexWrap: "wrap",
       justifycontent: "center",
       alignItems: "center",
    }
    return(
        <div style={styles}>
            <Product title = "Zebronic-Zeb Transformer" idx={0} />
            <Product title=" LogisticTech MX Master" idx={1}/>
            <Product title ="Apple Pencil (2nd GEN)" idx={2}/>
            <Product title= "Petronics Ted 23" idx={3}/>
            </div>
    )
}
export default ProductTab;
// function ProductTab(){
//    let features = ["hi-tech","durabale","fast"];
// //    let features = [<li>"hi-tech"</li>,<li>"durabale"</li>,<li>"fast"</li>];
// //    let features2 = {a: "hi-tech", b: "durabale", c:"fast"}
//     return(
//     <div>
//         <Product title ="laptop" Price= {3000}/>
//         <Product title= "Mobile" Price = {5000} />
//         <Product title = "system" Price ={2000}/>
        
//     </div>
//     );
// }
// export default ProductTab;
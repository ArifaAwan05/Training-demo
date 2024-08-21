export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecoration: "line-through"
    };
    let newStyles ={
        fonWeight: "bold"
    }
    let style ={
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        margin: "12px",
    }

    return(
    <div style={style}>
        <span style ={oldStyles}> {oldPrice} </span>
        <span style ={newStyles}> {newPrice} </span>
    </div>
    )
}

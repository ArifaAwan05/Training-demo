
function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
    
}
export default function Form(){
    return(
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter some text" />
        <button>Submit</button>
    </form>)
}
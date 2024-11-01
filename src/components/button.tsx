"use client"
interface Iprops {
    text: string
}

const Button = (props:Iprops) => {
    const handleclick =() =>{
   alert("button clicked")
    }

    return (
        <button
        onClick = {handleclick} 
        className="text-black ">
            { props.text }
        </button>
    )
}
export default Button
interface ButtonProps {
    variants : "primary" | "secondary" ;  
    size : "sm" | "md" | "lg"; 
    text : string,
    startIcon?: any; 
    endIcon?: any ; 
    onclick: () => void
}

const variantStyles ={
    "primary" : "bg-purple-600 px-6 py-3 rounded-xl font-bold text-white",
    "secondary" : "bg-purple-400 text-white"
}

export const Button = (props: ButtonProps) => {
    return <button className={variantStyles[props.variants]}>{props.text}</button>
}


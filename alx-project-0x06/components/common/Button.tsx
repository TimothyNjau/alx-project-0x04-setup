import { ButtonProps } from "@/interfaces/interface"

const Button : React.FC<ButtonProps> = ({buttonLabel, buttonBackgroundColor}) => {

    return (
        <>
            <button className={`px-4 py-2 text-center text-xl bg-${buttonBackgroundColor}-500 border-2 rounded-full border-black`}> 
                {buttonLabel}    
            </button>
        </>
    )
}

export default Button;
import { NextComponentType } from "next";

type AlertMsgProps = {
    message: string
}

const AlertMsg = ({ message }: AlertMsgProps) => {

    return (
        <div className="absolute z-50 top-6 w-fit bg-cyan-500 font-medium p-2 rounded-lg text-xs shadow-lg"
        data-aos="fade-down"
        data-aos-duration="250">
            <p>{message}</p>
        </div>
    )
}

export default AlertMsg

import Loadeing from "../../public/Loader.svg";
import Image from "next/image";


export default function Loader() {
    return (
        <div className="flex justify-center">
            <Image src={Loadeing} alt="Loading..." />
        </div>
    )
}
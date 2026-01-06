import { useState, useEffect }  from "react";
import "./styles.css";
import data from "./data";

const Accordian = () => {
    const [isMultiSelect, setMultiSelect] = useState(false);
    const [visibleAnswer, setVisibleAnswer] = useState([]);

    useEffect(() => {
        if(!isMultiSelect) {
            setVisibleAnswer([visibleAnswer[0]])
        }
    }, [isMultiSelect])
    return (
        <div className="flex flex-col items-center gap-2">
            <button className="cursor-pointer" onClick={() => setMultiSelect(prev => !prev)}>{isMultiSelect ? 'remove multi select':'add multi select'}</button>
            {data && data.length > 0 ? (
                data.map(item => (
                    <div className="w-[300px] bg-red-50" key="{item.id}">
                        <div className="flex cursor-pointer" onClick={() => isMultiSelect ? setVisibleAnswer([...visibleAnswer, item.id]) : setVisibleAnswer([item.id])}>
                            <h2>{item.question}</h2>
                            <span>+</span>
                        </div>
                        <div className={visibleAnswer.includes(item.id) ? '':'hidden'}>{item.answer}</div>
                    </div>
                ))
            ) : (
                <div className="">Not Found</div>
            )}
        </div>
    )
}

export default Accordian;
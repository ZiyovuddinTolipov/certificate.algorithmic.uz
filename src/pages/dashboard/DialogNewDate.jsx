/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function Dialog(props) {
    const [date, setDate] = useState('');
    const [savedDate, setSavedDate] = useState('');

    // useEffect(() => {
    //     // Load saved date when component mounts
    //     loadSavedDate();
    // }, []);

    // Function to save date to local storage
    const saveDate = () => {
        localStorage.setItem('savedDate', date);
        // alert('Date saved successfully!');
    }

    // Function to load saved date from local storage
    // const loadSavedDate = () => {
    //     const savedDate = localStorage.getItem('savedDate');
    //     if (savedDate) {
    //         setSavedDate(savedDate);
    //     }
    // }

    // Function to handle date input change
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <dialog id="addColumn" className="modal z-">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* <h3 className="font-bold text-lg">{props.data.fullName}</h3> */}
                <h3 className='my-3'>Assalomu Aleykum bugun qanday mavzu o'tamiz ?</h3>
                <form className='flex gap-2 flex-col'>
                    <label className="form-control max-w-[100%] m-1">
                        <div className="label">
                            <span className="label-text">Sana oy/kun/yil</span>
                        </div>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className='input input-bordered input-primary w-full max-w-[100%]'
                        />
                    </label>
                    <label className="form-control max-w-[100%] m-1">
                        <div className="label">
                            <span className="label-text">Dars mavzusi</span>
                        </div>
                        <textarea placeholder="JavaScript Top" className="textarea textarea-bordered textarea-xs w-full max-w-[100%]" ></textarea>
                    </label>
                    <button className='btn btn-active btn-primary' onClick={saveDate}>QO'SHISH</button>
                </form>
            </div>
        </dialog>
    )
}

export default Dialog;
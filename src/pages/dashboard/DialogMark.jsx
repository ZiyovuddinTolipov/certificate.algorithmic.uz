/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function Dialog(props) {
    const [date, setDate] = useState('');
    const [savedDate, setSavedDate] = useState('');

    useEffect(() => {
        // Load saved date when component mounts
        loadSavedDate();
    }, []);

    // Function to save date to local storage
    const saveDate = () => {
        localStorage.setItem('savedDate', date);
        // alert('Date saved successfully!');
    }

    // Function to load saved date from local storage
    const loadSavedDate = () => {
        const savedDate = localStorage.getItem('savedDate');
        if (savedDate) {
            setSavedDate(savedDate);
        }
    }

    // Function to handle date input change
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <dialog id="addAttendance" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* <h3 className="font-bold text-lg">{props.data.fullName}</h3> */}
                <h3 className='my-3'>Keling o'quvchilarni baholaymiz ?</h3>
                <div className='flex gap-2 flex-col '>
                    <div className='flex gap-2 '>
                        <button className="btn">Button</button>
                        <button className="btn btn-neutral">Neutral</button>
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-accent">Accent</button>
                    </div>
                    <div className='flex gap-2 hidden'>
                        <h2>Baholash</h2>
                    <input type="radio" name="radio-10" className="radio checked:bg-red-500 radio-error" checked />
                    <input type="radio" name="radio-10" className="radio checked:bg-white radio-mark" checked />
                    <input type="radio" name="radio-10" className="radio checked:bg-indigo-500 radio-primary" checked />
                    <input type="radio" name="radio-10" className="radio checked:bg-teal-500 radio-accent" checked />
                    <input type="radio" name="radio-10" className="radio checked:bg-yellow-500 radio-warning" checked />
                    <input type="radio" name="radio-10" className="radio checked:bg-sky-500 radio-info" checked />
                    </div>
                    <p className='text-base'>maktab : {props.school} </p>
                    <p className='text-base'>sinf : {props.class} </p>
                    <label className="form-control max-w-[100%] m-1">
                        <div className="label">
                            <span className="label-text">Nega bunday baho qo'ydingiz ?</span>
                        </div>
                        <input
                            type="text"
                            className='input input-bordered input-primary w-full max-w-[100%]'
                        />
                    </label>
                    <button className='btn btn-active btn-info' >QO'SHISH</button>
                </div>
            </div>
        </dialog >
    )
}

export default Dialog;
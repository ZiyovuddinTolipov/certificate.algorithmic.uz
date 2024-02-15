/* eslint-disable react/prop-types */
import students from '../../data/students.json';

function Mark(props) {
    // console.log(typeof props.score)
    const style = {
        buttons: 'btn btn-sm w-full h-[100%] rounded-none'
    }
    // let props = props;
    const returnColor = (props) => {
        if (props.score == 0) {
            return ' '
        } else if (props.score == 1) {
            return 'btn-warning'
        } else if (props.score == 2) {
            return 'btn-primary'
        } else if (props.score == 3) {
            return 'btn-secondary'
        } else {
            return 'btn-accent'
        }
    }
    return <button className={`${style.buttons} ${returnColor(props)}`} >{props.comment}</button>
}

const OquvchilarJadvali = () => {
    return (
        <table className='table-students-mark  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%] h-auto'>
            <thead>
                <tr>
                    <th className='px-6 py-1 font-medium  whitespace-nowrap text-white bg-slate-800 ' style={{ position: 'sticky', left: 0, zIndex: 1 }}>Ism Familiya</th>
                    <th className='px-6 py-1 font-medium  whitespace-nowrap text-white bg-blue-800 cursor-pointer ' style={{ position: 'sticky', left: 120, zIndex: 1 }}>+</th>
                    {Object.keys(students.oquvchilar[0].baholar).map((sana, index) => (
                        <th className='text-center px-6 py-3' key={index}>{sana}</th>
                    ))}
                </tr>
            </thead> 
            <tbody>
                {students.oquvchilar.map((oquvchi, index) => (
                    <tr className='border-b bg-gray-800 border-gray-700' key={index}>
                        <td className='px-6 py-1 bg-slate-800' style={{ position: 'sticky', left: 0, zIndex: 1 }}>{oquvchi.ism}</td>
                        <td className='px-6 py-1 bg-blue-800 cursor-pointer font-bold text-xl text-white' style={{ position: 'sticky', left: 120, zIndex: 1 }}>+</td>
                        {Object.values(oquvchi.baholar).map((allScore, index) => (
                            <td className={allScore.score >= 0 ? 'text-center' : 'text-center bg-red-900'} key={index}>{allScore.score >= 0 ? <Mark score={allScore.score} comment={allScore.comment}/> : "nb"}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OquvchilarJadvali;
import students from '../data/students.json';

function Mark(props) {
    // console.log(typeof props.score)
    const style = {
        buttons: 'btn btn-sm  max-w-[80px] w-full'
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
    return <button className={`${style.buttons} ${returnColor(props)}`} />
}

const OquvchilarJadvali = () => {
    return (
        <table className='table-students-mark text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%] h-auto'>
            <thead>
                <tr>
                    <th className='px-6 py-1 font-medium  whitespace-nowrap text-white'>Ism Familiya</th>
                    {Object.keys(students.oquvchilar[0].baholar).map((sana, index) => (
                        <th className='text-center px-6 py-3' key={index}>{sana}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {students.oquvchilar.map((oquvchi, index) => (
                    <tr className='border-b bg-gray-800 border-gray-700' key={index}>
                        <td className='px-6 py-1'>{oquvchi.ism}</td>
                        {Object.values(oquvchi.baholar).map((score, index) => (
                            <td className={score>=0 ? 'px-6 py-1 text-center':'px-6 py-1 text-center bg-red-900'} key={index}>{score>=0 ?  <Mark score={score} />:"nb"}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OquvchilarJadvali;
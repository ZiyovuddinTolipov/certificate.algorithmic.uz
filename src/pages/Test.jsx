import students from '../data/students.json';

const OquvchilarJadvali = () => {
    return (
        <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%] h-auto'>
            <thead>
                <tr>
                    <th className='px-6 py-1 font-medium  whitespace-nowrap text-white'>Ism Familiya</th>
                    {Object.keys(students.oquvchilar[0].baholar).map((sana, index) => (
                        <th key={index}>{sana}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {students.oquvchilar.map((oquvchi, index) => (
                    <tr className='border-b bg-gray-800 border-gray-700' key={index}>
                        <td className='px-6 py-1'>{oquvchi.ism}</td>
                        {Object.values(oquvchi.baholar).map((bahol, index) => (
                            <td className='px-6 py-1' key={index}>{bahol}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OquvchilarJadvali;
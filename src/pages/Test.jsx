import students from '../data/students.json';
const OquvchilarJadvali = () => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ position: 'sticky', left: 0, zIndex: 1 }} className='w-[400px]'>Ism Familiya</th>
                        {Object.keys(students.oquvchilar[0].baholar).map((sana, index) => (
                            <th key={index}>{sana}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {students.oquvchilar.map((oquvchi, index) => (
                        <tr key={index} >
                            <td style={{ position: 'sticky', left: 0, zIndex: 1 }}>{oquvchi.ism}</td>
                            {Object.values(oquvchi.baholar).map((bahol, index) => (
                                <td key={index} className='w-[400px]'>{bahol}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OquvchilarJadvali;
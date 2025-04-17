const Table = () => {

    const token = localStorage.getItem('accessToken');
    const t = JSON.parse(token);
    const name = localStorage.getItem('name');
    const n = JSON.parse(name);

    return (
        <>
            {
                t.token ? (
                    <div className="bg-gradient-to-b from-[#007782] via-[#01818c] to-[#00c1bc] min-h-screen h-full flex justify-center items-center relative">
                        <h2 className="absolute top-5 right-5 text-2xl font-bold text-white">{n.name}</h2>
                        <table className="bg-slate-100 w-[90%] px-10 rounded-[5px]">

                            <tbody>
                                <tr className="border-b border-slate-500 text-slate-900 font-bold text-xl h-20 mx-10">
                                    <td>S.No.</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>DOB</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>1</td>
                                    <td>Michael Holz</td>
                                    <td>micheal@email.com</td>
                                    <td>02/05/1999</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>2</td>
                                    <td>Paula Wilson</td>
                                    <td>Paula@email.com</td>
                                    <td>05/02/1999</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>3</td>
                                    <td>Antonio Moreno</td>
                                    <td>Antonio@email.com</td>
                                    <td>02/05/1995</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>4</td>
                                    <td>Mary Saveley</td>
                                    <td>Mary@email.com</td>
                                    <td>02/05/1992</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>5</td>
                                    <td>Martin Sommer</td>
                                    <td>micheal@email.com</td>
                                    <td>02/05/1989</td>
                                </tr>
                                <tr className="border-b border-slate-500 text-slate-900 text-xl h-20">
                                    <td>6</td>
                                    <td>Tarzan Sommer</td>
                                    <td>Tarzan@email.com</td>
                                    <td>02/05/1989</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) :
                    (
                        <h1 className="text-3xl text-slate-900 font-bold">Please Login to see the table</h1>
                    )
            }

        </>
    )
}

export default Table;
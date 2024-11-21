import React from 'react'

const TableContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="relative w-full overflow-x-auto mt-5">
            <table className="border shadow bg-white w-full rounded-md ">
                {children}

            </table>




        </div>
    )
}

export default TableContainer
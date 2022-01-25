function Error({children}) {
//function Error({mensaje}) {
    return (
        <div className="bg-red-800 text-white text-center uppercase p-3 mb-3 font-bold rounded">
            {children}
            {/* <p>{mensaje}</p> */}
        </div>
    )
}

export default Error

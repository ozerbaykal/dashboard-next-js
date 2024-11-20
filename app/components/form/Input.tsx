type Props = {
    item: {
        label: string,
        name: string,
        type?: string

    }

}



const Input = ({ item }: Props) => {
    return (
        <div className="flex flex-col gap-1" >
            <label className="font-semibold" htmlFor={item.name}>{item.label}</label>
            <input type={item.type} name={item.name} id={item.name}
                className="shadow rounded-lg py-1 px-3 "
            />
        </div>
    )
}

export default Input
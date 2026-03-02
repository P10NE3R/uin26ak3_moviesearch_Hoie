export default function History({history, setSearch}){

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    return (
        <select onChange={handleChange}>
            {history?.map((item, i) => <option key={i + item} value={item}>{item}</option>)}
        </select> 
    )
}






function Main(props){
    const style = {
        background: "pink",
    }
    return (
    <div style={style}>
        <h2>{props.genero}</h2>
        <p>{props.nome}</p>
    </div>
    )
}


export default Main;
export default function Institution(props) {
    const instStyle = {
        backgroundColor: "lightgray",
        borderStyle: "solid",
        borderColor: "darkgray",
        color: "black",
        padding: "10px",
    }

    const containerStyle = {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "20px",
        marginBottom: "20px",
        boxStyle: "border-box",
    }

    return (
        <div style={containerStyle}>
            <div style={instStyle}>
                <h2>{props.name}</h2>
                <h3>{props.dates}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
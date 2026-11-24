export default function Input(props) {
    return (
        <input
            type="text"
            placeholder="Please enter text"
            value={props.value}
            onChange={(e) => props.setText(e.target.value)}
        />
    )
}
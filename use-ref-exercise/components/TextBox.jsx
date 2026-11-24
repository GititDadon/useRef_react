export default function TextBox(props) {
    return (
        <input
            type="text"
            ref={props.inputRef}
            placeholder="Enter text..."
        />
    )
}
export default function({formProps, handleChange}) {

    const {id, label, value, mode, options} = formProps;

    switch(mode) {
        case "input":
            return (
                <div>
                    {label}
                    <input 
                        type="text"
                        value={value}
                        onChange={e => handleChange(e)}
                    />
                </div>
            )

        case "checkbox":
            return (
                <div>
                    {label}
                    <input 
                        type="checkbox"
                        checked={value}
                        onChange={e => handleChange(e)}
                    />
                </div>
            )

        case "radio":
            return (
                <div>{label}
                    {options.map((opt, i) => {
                        return (
                            <label key={`${id}${i}`}>
                                <input 
                                    type="radio"
                                    name={id}
                                    value={opt}
                                    checked={value === opt}
                                    onChange={e => handleChange(e)}
                                />
                                {opt}
                            </label>
                        )
                    })}
                </div>
            )

        case "select":
            return (
                <div>
                    {label}
                    <select
                        value={value}
                        onChange={e => handleChange(e)}
                    >
                        {options.map((opt, i) => {
                            return (
                                <option key={`${id}${i}`} value={opt}>{opt}</option>
                            )
                        })}
                    </select>
                </div> 
            )
    }
 
}
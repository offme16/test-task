import s from "./MySelect.module.css"
export const MySelect = ({options,defaultValue,value,onChange}) => {
    return (
        <select className={s.select}
            value={value}
            onChange={event => onChange(event.target.value)}>
            <option className={s.option} disabled value="">{defaultValue}</option>
            {options.map(option => <option key={option.value}
            value={option.value}>{option.name} 
            </option>)}
        </select>
    )
}
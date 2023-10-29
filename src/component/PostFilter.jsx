import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";
const PostFilter = ({filter, setFilter}) => {
    return <div>
      <MyInput
        placeholder="Поиск"
        onChange={(e) => setFilter({...filter, query:e.target.value})}
        value={filter.query}
      />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По имени" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
}
export default PostFilter;
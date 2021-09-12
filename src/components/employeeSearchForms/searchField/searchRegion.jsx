import { Select } from "antd";

const { Option } = Select;

export default function SearchRegion({ changeHandler, value }) {
  return (
    <div className="search-border">
      <h2 className="heading-text">Region</h2>
      <Select
      value={value}
        showSearch
        style={{ width: "100%" }}
        placeholder="Select"
        onChange={changeHandler}
      >
        <Option name="region" value="Yerevan">Yerevan</Option>
        <Option name="region" value="Aragatsotn">Aragatsotn</Option>
        <Option name="region" value="Ararat">Ararat</Option>
        <Option name="region" value="Armavir">Armavir</Option>
        <Option name="region" value="Gegharkunik">Gegharkunik</Option>
        <Option name="region" value="Kotayk">Kotayk</Option>
        <Option name="region" value="Lori">Lori</Option>
        <Option name="region" value="Syunik">Syunik</Option>
        <Option name="region" value="Tavush">Tavush</Option>
        <Option name="region" value="Vayotz Dzor">Vayotz Dzor</Option>
      </Select>
    </div>
  );
}

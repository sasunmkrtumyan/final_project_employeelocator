import { Input } from "antd";

export default function SearchKeyword() {
  return (
    <div className="search-keyword">
      <h1 className="heading-text">Search field</h1>
      <div className="search-border">
        <h2 className="heading-text">Search Keywords</h2>
        <Input name='Search Keywords' placeholder="search by keyword" />
      </div>
    </div>
  );
}
